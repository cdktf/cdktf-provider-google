# `computeSecurityPolicy` Submodule <a name="`computeSecurityPolicy` Submodule" id="@cdktf/provider-google.computeSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityPolicy <a name="ComputeSecurityPolicy" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy google_compute_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicy(scope Construct, id *string, config ComputeSecurityPolicyConfig) ComputeSecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig">ComputeSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig">ComputeSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig">PutAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig">PutAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig">PutRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdaptiveProtectionConfig">ResetAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdvancedOptionsConfig">ResetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRecaptchaOptionsConfig">ResetRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdaptiveProtectionConfig` <a name="PutAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig"></a>

```go
func PutAdaptiveProtectionConfig(value ComputeSecurityPolicyAdaptiveProtectionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---

##### `PutAdvancedOptionsConfig` <a name="PutAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig"></a>

```go
func PutAdvancedOptionsConfig(value ComputeSecurityPolicyAdvancedOptionsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---

##### `PutRecaptchaOptionsConfig` <a name="PutRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig"></a>

```go
func PutRecaptchaOptionsConfig(value ComputeSecurityPolicyRecaptchaOptionsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeSecurityPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

---

##### `ResetAdaptiveProtectionConfig` <a name="ResetAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdaptiveProtectionConfig"></a>

```go
func ResetAdaptiveProtectionConfig()
```

##### `ResetAdvancedOptionsConfig` <a name="ResetAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdvancedOptionsConfig"></a>

```go
func ResetAdvancedOptionsConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRecaptchaOptionsConfig` <a name="ResetRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRecaptchaOptionsConfig"></a>

```go
func ResetRecaptchaOptionsConfig()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.ComputeSecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.ComputeSecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.ComputeSecurityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.ComputeSecurityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfig">AdaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfig">RecaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference">ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList">ComputeSecurityPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference">ComputeSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfigInput">AdaptiveProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfigInput">AdvancedOptionsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfigInput">RecaptchaOptionsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdaptiveProtectionConfig`<sup>Required</sup> <a name="AdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfig"></a>

```go
func AdaptiveProtectionConfig() ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference</a>

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfig"></a>

```go
func AdvancedOptionsConfig() ComputeSecurityPolicyAdvancedOptionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `RecaptchaOptionsConfig`<sup>Required</sup> <a name="RecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfig"></a>

```go
func RecaptchaOptionsConfig() ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference">ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.rule"></a>

```go
func Rule() ComputeSecurityPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList">ComputeSecurityPolicyRuleList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeouts"></a>

```go
func Timeouts() ComputeSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference">ComputeSecurityPolicyTimeoutsOutputReference</a>

---

##### `AdaptiveProtectionConfigInput`<sup>Optional</sup> <a name="AdaptiveProtectionConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfigInput"></a>

```go
func AdaptiveProtectionConfigInput() ComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---

##### `AdvancedOptionsConfigInput`<sup>Optional</sup> <a name="AdvancedOptionsConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfigInput"></a>

```go
func AdvancedOptionsConfigInput() ComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecaptchaOptionsConfigInput`<sup>Optional</sup> <a name="RecaptchaOptionsConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfigInput"></a>

```go
func RecaptchaOptionsConfigInput() ComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityPolicyAdaptiveProtectionConfig <a name="ComputeSecurityPolicyAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyAdaptiveProtectionConfig {
	Layer7DdosDefenseConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.property.layer7DdosDefenseConfig">Layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | layer_7_ddos_defense_config block. |

---

##### `Layer7DdosDefenseConfig`<sup>Optional</sup> <a name="Layer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.property.layer7DdosDefenseConfig"></a>

```go
Layer7DdosDefenseConfig ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

layer_7_ddos_defense_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#layer_7_ddos_defense_config ComputeSecurityPolicy#layer_7_ddos_defense_config}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
	Enable: interface{},
	RuleVisibility: *string,
	ThresholdConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.enable">Enable</a></code> | <code>interface{}</code> | If set to true, enables CAAP for L7 DDoS detection. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.ruleVisibility">RuleVisibility</a></code> | <code>*string</code> | Rule visibility. Supported values include: "STANDARD", "PREMIUM". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.thresholdConfigs">ThresholdConfigs</a></code> | <code>interface{}</code> | threshold_configs block. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

If set to true, enables CAAP for L7 DDoS detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enable ComputeSecurityPolicy#enable}

---

##### `RuleVisibility`<sup>Optional</sup> <a name="RuleVisibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.ruleVisibility"></a>

```go
RuleVisibility *string
```

- *Type:* *string

Rule visibility. Supported values include: "STANDARD", "PREMIUM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#rule_visibility ComputeSecurityPolicy#rule_visibility}

---

##### `ThresholdConfigs`<sup>Optional</sup> <a name="ThresholdConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.thresholdConfigs"></a>

```go
ThresholdConfigs interface{}
```

- *Type:* interface{}

threshold_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#threshold_configs ComputeSecurityPolicy#threshold_configs}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs {
	Name: *string,
	AutoDeployConfidenceThreshold: *f64,
	AutoDeployExpirationSec: *f64,
	AutoDeployImpactedBaselineThreshold: *f64,
	AutoDeployLoadThreshold: *f64,
	DetectionAbsoluteQps: *f64,
	DetectionLoadThreshold: *f64,
	DetectionRelativeToBaselineQps: *f64,
	TrafficGranularityConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.name">Name</a></code> | <code>*string</code> | The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployConfidenceThreshold">AutoDeployConfidenceThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_confidence_threshold ComputeSecurityPolicy#auto_deploy_confidence_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployExpirationSec">AutoDeployExpirationSec</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_expiration_sec ComputeSecurityPolicy#auto_deploy_expiration_sec}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployImpactedBaselineThreshold">AutoDeployImpactedBaselineThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_impacted_baseline_threshold ComputeSecurityPolicy#auto_deploy_impacted_baseline_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployLoadThreshold">AutoDeployLoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_load_threshold ComputeSecurityPolicy#auto_deploy_load_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionAbsoluteQps">DetectionAbsoluteQps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#detection_absolute_qps ComputeSecurityPolicy#detection_absolute_qps}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionLoadThreshold">DetectionLoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#detection_load_threshold ComputeSecurityPolicy#detection_load_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionRelativeToBaselineQps">DetectionRelativeToBaselineQps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#detection_relative_to_baseline_qps ComputeSecurityPolicy#detection_relative_to_baseline_qps}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.trafficGranularityConfigs">TrafficGranularityConfigs</a></code> | <code>interface{}</code> | traffic_granularity_configs block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name must be 1-63 characters long, and comply with RFC1035.

The name must be unique within the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `AutoDeployConfidenceThreshold`<sup>Optional</sup> <a name="AutoDeployConfidenceThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployConfidenceThreshold"></a>

```go
AutoDeployConfidenceThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_confidence_threshold ComputeSecurityPolicy#auto_deploy_confidence_threshold}.

---

##### `AutoDeployExpirationSec`<sup>Optional</sup> <a name="AutoDeployExpirationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployExpirationSec"></a>

```go
AutoDeployExpirationSec *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_expiration_sec ComputeSecurityPolicy#auto_deploy_expiration_sec}.

---

##### `AutoDeployImpactedBaselineThreshold`<sup>Optional</sup> <a name="AutoDeployImpactedBaselineThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployImpactedBaselineThreshold"></a>

```go
AutoDeployImpactedBaselineThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_impacted_baseline_threshold ComputeSecurityPolicy#auto_deploy_impacted_baseline_threshold}.

---

##### `AutoDeployLoadThreshold`<sup>Optional</sup> <a name="AutoDeployLoadThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployLoadThreshold"></a>

```go
AutoDeployLoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#auto_deploy_load_threshold ComputeSecurityPolicy#auto_deploy_load_threshold}.

---

##### `DetectionAbsoluteQps`<sup>Optional</sup> <a name="DetectionAbsoluteQps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionAbsoluteQps"></a>

```go
DetectionAbsoluteQps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#detection_absolute_qps ComputeSecurityPolicy#detection_absolute_qps}.

---

##### `DetectionLoadThreshold`<sup>Optional</sup> <a name="DetectionLoadThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionLoadThreshold"></a>

```go
DetectionLoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#detection_load_threshold ComputeSecurityPolicy#detection_load_threshold}.

---

##### `DetectionRelativeToBaselineQps`<sup>Optional</sup> <a name="DetectionRelativeToBaselineQps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionRelativeToBaselineQps"></a>

```go
DetectionRelativeToBaselineQps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#detection_relative_to_baseline_qps ComputeSecurityPolicy#detection_relative_to_baseline_qps}.

---

##### `TrafficGranularityConfigs`<sup>Optional</sup> <a name="TrafficGranularityConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.trafficGranularityConfigs"></a>

```go
TrafficGranularityConfigs interface{}
```

- *Type:* interface{}

traffic_granularity_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#traffic_granularity_configs ComputeSecurityPolicy#traffic_granularity_configs}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs {
	Type: *string,
	EnableEachUniqueValue: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.type">Type</a></code> | <code>*string</code> | Type of this configuration. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.enableEachUniqueValue">EnableEachUniqueValue</a></code> | <code>interface{}</code> | If enabled, traffic matching each unique value for the specified type constitutes a separate traffic unit. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.value">Value</a></code> | <code>*string</code> | Requests that match this value constitute a granular traffic unit. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `EnableEachUniqueValue`<sup>Optional</sup> <a name="EnableEachUniqueValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.enableEachUniqueValue"></a>

```go
EnableEachUniqueValue interface{}
```

- *Type:* interface{}

If enabled, traffic matching each unique value for the specified type constitutes a separate traffic unit.

It can only be set to true if value is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enable_each_unique_value ComputeSecurityPolicy#enable_each_unique_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.value"></a>

```go
Value *string
```

- *Type:* *string

Requests that match this value constitute a granular traffic unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyAdvancedOptionsConfig <a name="ComputeSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyAdvancedOptionsConfig {
	JsonCustomConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig,
	JsonParsing: *string,
	LogLevel: *string,
	UserIpRequestHeaders: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">JsonParsing</a></code> | <code>*string</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>*[]*string</code> | An optional list of case-insensitive request header names to use for resolving the callers client IP address. |

---

##### `JsonCustomConfig`<sup>Optional</sup> <a name="JsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```go
JsonCustomConfig ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#json_custom_config ComputeSecurityPolicy#json_custom_config}

---

##### `JsonParsing`<sup>Optional</sup> <a name="JsonParsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```go
JsonParsing *string
```

- *Type:* *string

JSON body parsing. Supported values include: "DISABLED", "STANDARD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#json_parsing ComputeSecurityPolicy#json_parsing}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Logging level. Supported values include: "NORMAL", "VERBOSE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#log_level ComputeSecurityPolicy#log_level}

---

##### `UserIpRequestHeaders`<sup>Optional</sup> <a name="UserIpRequestHeaders" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```go
UserIpRequestHeaders *[]*string
```

- *Type:* *[]*string

An optional list of case-insensitive request header names to use for resolving the callers client IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#user_ip_request_headers ComputeSecurityPolicy#user_ip_request_headers}

---

### ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
	ContentTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">ContentTypes</a></code> | <code>*[]*string</code> | A list of custom Content-Type header values to apply the JSON parsing. |

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```go
ContentTypes *[]*string
```

- *Type:* *[]*string

A list of custom Content-Type header values to apply the JSON parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#content_types ComputeSecurityPolicy#content_types}

---

### ComputeSecurityPolicyConfig <a name="ComputeSecurityPolicyConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AdaptiveProtectionConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig,
	AdvancedOptionsConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig,
	Description: *string,
	Id: *string,
	Project: *string,
	RecaptchaOptionsConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig,
	Rule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.adaptiveProtectionConfig">AdaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | adaptive_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this security policy. Max size is 2048. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.recaptchaOptionsConfig">RecaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | recaptcha_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.type">Type</a></code> | <code>*string</code> | The type indicates the intended use of the security policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `AdaptiveProtectionConfig`<sup>Optional</sup> <a name="AdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.adaptiveProtectionConfig"></a>

```go
AdaptiveProtectionConfig ComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

adaptive_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#adaptive_protection_config ComputeSecurityPolicy#adaptive_protection_config}

---

##### `AdvancedOptionsConfig`<sup>Optional</sup> <a name="AdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```go
AdvancedOptionsConfig ComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#advanced_options_config ComputeSecurityPolicy#advanced_options_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this security policy. Max size is 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#project ComputeSecurityPolicy#project}

---

##### `RecaptchaOptionsConfig`<sup>Optional</sup> <a name="RecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.recaptchaOptionsConfig"></a>

```go
RecaptchaOptionsConfig ComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

recaptcha_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#recaptcha_options_config ComputeSecurityPolicy#recaptcha_options_config}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#rule ComputeSecurityPolicy#rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#timeouts ComputeSecurityPolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type indicates the intended use of the security policy.

CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

### ComputeSecurityPolicyRecaptchaOptionsConfig <a name="ComputeSecurityPolicyRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRecaptchaOptionsConfig {
	RedirectSiteKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.property.redirectSiteKey">RedirectSiteKey</a></code> | <code>*string</code> | A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy. |

---

##### `RedirectSiteKey`<sup>Required</sup> <a name="RedirectSiteKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.property.redirectSiteKey"></a>

```go
RedirectSiteKey *string
```

- *Type:* *string

A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy.

The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#redirect_site_key ComputeSecurityPolicy#redirect_site_key}

---

### ComputeSecurityPolicyRule <a name="ComputeSecurityPolicyRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRule {
	Action: *string,
	Match: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch,
	Priority: *f64,
	Description: *string,
	HeaderAction: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction,
	PreconfiguredWafConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig,
	Preview: interface{},
	RateLimitOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions,
	RedirectOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.action">Action</a></code> | <code>*string</code> | Action to take when match matches the request. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | An unique positive integer indicating the priority of evaluation for a rule. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.description">Description</a></code> | <code>*string</code> | An optional description of this rule. Max size is 64. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preview">Preview</a></code> | <code>interface{}</code> | When set to true, the action specified above is not enforced. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to take when match matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#action ComputeSecurityPolicy#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.match"></a>

```go
Match ComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#match ComputeSecurityPolicy#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An unique positive integer indicating the priority of evaluation for a rule.

Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#priority ComputeSecurityPolicy#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this rule. Max size is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.headerAction"></a>

```go
HeaderAction ComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#header_action ComputeSecurityPolicy#header_action}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```go
PreconfiguredWafConfig ComputeSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#preconfigured_waf_config ComputeSecurityPolicy#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

When set to true, the action specified above is not enforced.

Stackdriver logs for requests that trigger a preview action are annotated as such.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#preview ComputeSecurityPolicy#preview}

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.rateLimitOptions"></a>

```go
RateLimitOptions ComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#rate_limit_options ComputeSecurityPolicy#rate_limit_options}

---

##### `RedirectOptions`<sup>Optional</sup> <a name="RedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.redirectOptions"></a>

```go
RedirectOptions ComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#redirect_options ComputeSecurityPolicy#redirect_options}

---

### ComputeSecurityPolicyRuleHeaderAction <a name="ComputeSecurityPolicyRuleHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleHeaderAction {
	RequestHeadersToAdds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code>interface{}</code> | request_headers_to_adds block. |

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```go
RequestHeadersToAdds interface{}
```

- *Type:* interface{}

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#request_headers_to_adds ComputeSecurityPolicy#request_headers_to_adds}

---

### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds {
	HeaderName: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to set. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The value to set the named header to. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#header_name ComputeSecurityPolicy#header_name}

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#header_value ComputeSecurityPolicy#header_value}

---

### ComputeSecurityPolicyRuleMatch <a name="ComputeSecurityPolicyRuleMatch" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleMatch {
	Config: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig,
	Expr: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr,
	ExprOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a></code> | expr_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Predefined rule expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.config"></a>

```go
Config ComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#config ComputeSecurityPolicy#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.expr"></a>

```go
Expr ComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#expr ComputeSecurityPolicy#expr}

---

##### `ExprOptions`<sup>Optional</sup> <a name="ExprOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.exprOptions"></a>

```go
ExprOptions ComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

expr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#expr_options ComputeSecurityPolicy#expr_options}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Predefined rule expression.

If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#versioned_expr ComputeSecurityPolicy#versioned_expr}

---

### ComputeSecurityPolicyRuleMatchConfig <a name="ComputeSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleMatchConfig {
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. |

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic.

There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#src_ip_ranges ComputeSecurityPolicy#src_ip_ranges}

---

### ComputeSecurityPolicyRuleMatchExpr <a name="ComputeSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleMatchExpr {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#expression ComputeSecurityPolicy#expression}

---

### ComputeSecurityPolicyRuleMatchExprOptions <a name="ComputeSecurityPolicyRuleMatchExprOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleMatchExprOptions {
	RecaptchaOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | recaptcha_options block. |

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions.property.recaptchaOptions"></a>

```go
RecaptchaOptions ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

recaptcha_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#recaptcha_options ComputeSecurityPolicy#recaptcha_options}

---

### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions {
	ActionTokenSiteKeys: *[]*string,
	SessionTokenSiteKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>*[]*string</code> | A list of site keys to be used during the validation of reCAPTCHA action-tokens. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>*[]*string</code> | A list of site keys to be used during the validation of reCAPTCHA session-tokens. |

---

##### `ActionTokenSiteKeys`<sup>Optional</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.actionTokenSiteKeys"></a>

```go
ActionTokenSiteKeys *[]*string
```

- *Type:* *[]*string

A list of site keys to be used during the validation of reCAPTCHA action-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#action_token_site_keys ComputeSecurityPolicy#action_token_site_keys}

---

##### `SessionTokenSiteKeys`<sup>Optional</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.sessionTokenSiteKeys"></a>

```go
SessionTokenSiteKeys *[]*string
```

- *Type:* *[]*string

A list of site keys to be used during the validation of reCAPTCHA session-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#session_token_site_keys ComputeSecurityPolicy#session_token_site_keys}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig {
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#exclusion ComputeSecurityPolicy#exclusion}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion {
	TargetRuleSet: *string,
	RequestCookie: interface{},
	RequestHeader: interface{},
	RequestQueryParam: interface{},
	RequestUri: interface{},
	TargetRuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">RequestCookie</a></code> | <code>interface{}</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">RequestQueryParam</a></code> | <code>interface{}</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">RequestUri</a></code> | <code>interface{}</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```go
TargetRuleSet *string
```

- *Type:* *string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#target_rule_set ComputeSecurityPolicy#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```go
RequestCookie interface{}
```

- *Type:* interface{}

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#request_cookie ComputeSecurityPolicy#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#request_header ComputeSecurityPolicy#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```go
RequestQueryParam interface{}
```

- *Type:* interface{}

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#request_query_param ComputeSecurityPolicy#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```go
RequestUri interface{}
```

- *Type:* interface{}

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#request_uri ComputeSecurityPolicy#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```go
TargetRuleIds *[]*string
```

- *Type:* *[]*string

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#target_rule_ids ComputeSecurityPolicy#target_rule_ids}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRuleRateLimitOptions <a name="ComputeSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleRateLimitOptions {
	ConformAction: *string,
	ExceedAction: *string,
	RateLimitThreshold: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold,
	BanDurationSec: *f64,
	BanThreshold: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold,
	EnforceOnKey: *string,
	EnforceOnKeyConfigs: interface{},
	EnforceOnKeyName: *string,
	ExceedRedirectOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.conformAction">ConformAction</a></code> | <code>*string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>interface{}</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | exceed_redirect_options block. |

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.conformAction"></a>

```go
ConformAction *string
```

- *Type:* *string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#conform_action ComputeSecurityPolicy#conform_action}

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedAction"></a>

```go
ExceedAction *string
```

- *Type:* *string

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#exceed_action ComputeSecurityPolicy#exceed_action}

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold"></a>

```go
RateLimitThreshold ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#rate_limit_threshold ComputeSecurityPolicy#rate_limit_threshold}

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banDurationSec"></a>

```go
BanDurationSec *f64
```

- *Type:* *f64

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#ban_duration_sec ComputeSecurityPolicy#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banThreshold"></a>

```go
BanThreshold ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#ban_threshold ComputeSecurityPolicy#ban_threshold}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKey"></a>

```go
EnforceOnKey *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enforce_on_key ComputeSecurityPolicy#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs"></a>

```go
EnforceOnKeyConfigs interface{}
```

- *Type:* interface{}

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enforce_on_key_configs ComputeSecurityPolicy#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}

---

##### `ExceedRedirectOptions`<sup>Optional</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedRedirectOptions"></a>

```go
ExceedRedirectOptions ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#exceed_redirect_options ComputeSecurityPolicy#exceed_redirect_options}

---

### ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {
	EnforceOnKeyName: *string,
	EnforceOnKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | Determines the key to enforce the rate_limit_threshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```go
EnforceOnKeyType *string
```

- *Type:* *string

Determines the key to enforce the rate_limit_threshold on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#enforce_on_key_type ComputeSecurityPolicy#enforce_on_key_type}

---

### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {
	Type: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.type">Type</a></code> | <code>*string</code> | Type of the redirect action. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.target">Target</a></code> | <code>*string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

### ComputeSecurityPolicyRuleRedirectOptions <a name="ComputeSecurityPolicyRuleRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyRuleRedirectOptions {
	Type: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.type">Type</a></code> | <code>*string</code> | Type of the redirect action. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.target">Target</a></code> | <code>*string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the redirect action.

Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

### ComputeSecurityPolicyTimeouts <a name="ComputeSecurityPolicyTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

&computesecuritypolicy.ComputeSecurityPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.putThresholdConfigs">PutThresholdConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetRuleVisibility">ResetRuleVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetThresholdConfigs">ResetThresholdConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThresholdConfigs` <a name="PutThresholdConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.putThresholdConfigs"></a>

```go
func PutThresholdConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.putThresholdConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetRuleVisibility` <a name="ResetRuleVisibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetRuleVisibility"></a>

```go
func ResetRuleVisibility()
```

##### `ResetThresholdConfigs` <a name="ResetThresholdConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetThresholdConfigs"></a>

```go
func ResetThresholdConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs">ThresholdConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibilityInput">RuleVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigsInput">ThresholdConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility">RuleVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdConfigs`<sup>Required</sup> <a name="ThresholdConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs"></a>

```go
func ThresholdConfigs() ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `RuleVisibilityInput`<sup>Optional</sup> <a name="RuleVisibilityInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibilityInput"></a>

```go
func RuleVisibilityInput() *string
```

- *Type:* *string

---

##### `ThresholdConfigsInput`<sup>Optional</sup> <a name="ThresholdConfigsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigsInput"></a>

```go
func ThresholdConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `RuleVisibility`<sup>Required</sup> <a name="RuleVisibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility"></a>

```go
func RuleVisibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.putTrafficGranularityConfigs">PutTrafficGranularityConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployConfidenceThreshold">ResetAutoDeployConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployExpirationSec">ResetAutoDeployExpirationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployImpactedBaselineThreshold">ResetAutoDeployImpactedBaselineThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployLoadThreshold">ResetAutoDeployLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionAbsoluteQps">ResetDetectionAbsoluteQps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionLoadThreshold">ResetDetectionLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionRelativeToBaselineQps">ResetDetectionRelativeToBaselineQps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetTrafficGranularityConfigs">ResetTrafficGranularityConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrafficGranularityConfigs` <a name="PutTrafficGranularityConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.putTrafficGranularityConfigs"></a>

```go
func PutTrafficGranularityConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.putTrafficGranularityConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoDeployConfidenceThreshold` <a name="ResetAutoDeployConfidenceThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployConfidenceThreshold"></a>

```go
func ResetAutoDeployConfidenceThreshold()
```

##### `ResetAutoDeployExpirationSec` <a name="ResetAutoDeployExpirationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployExpirationSec"></a>

```go
func ResetAutoDeployExpirationSec()
```

##### `ResetAutoDeployImpactedBaselineThreshold` <a name="ResetAutoDeployImpactedBaselineThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployImpactedBaselineThreshold"></a>

```go
func ResetAutoDeployImpactedBaselineThreshold()
```

##### `ResetAutoDeployLoadThreshold` <a name="ResetAutoDeployLoadThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployLoadThreshold"></a>

```go
func ResetAutoDeployLoadThreshold()
```

##### `ResetDetectionAbsoluteQps` <a name="ResetDetectionAbsoluteQps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionAbsoluteQps"></a>

```go
func ResetDetectionAbsoluteQps()
```

##### `ResetDetectionLoadThreshold` <a name="ResetDetectionLoadThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionLoadThreshold"></a>

```go
func ResetDetectionLoadThreshold()
```

##### `ResetDetectionRelativeToBaselineQps` <a name="ResetDetectionRelativeToBaselineQps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionRelativeToBaselineQps"></a>

```go
func ResetDetectionRelativeToBaselineQps()
```

##### `ResetTrafficGranularityConfigs` <a name="ResetTrafficGranularityConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetTrafficGranularityConfigs"></a>

```go
func ResetTrafficGranularityConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs">TrafficGranularityConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThresholdInput">AutoDeployConfidenceThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSecInput">AutoDeployExpirationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThresholdInput">AutoDeployImpactedBaselineThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThresholdInput">AutoDeployLoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQpsInput">DetectionAbsoluteQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThresholdInput">DetectionLoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQpsInput">DetectionRelativeToBaselineQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigsInput">TrafficGranularityConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold">AutoDeployConfidenceThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec">AutoDeployExpirationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold">AutoDeployImpactedBaselineThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold">AutoDeployLoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps">DetectionAbsoluteQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold">DetectionLoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps">DetectionRelativeToBaselineQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrafficGranularityConfigs`<sup>Required</sup> <a name="TrafficGranularityConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs"></a>

```go
func TrafficGranularityConfigs() ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a>

---

##### `AutoDeployConfidenceThresholdInput`<sup>Optional</sup> <a name="AutoDeployConfidenceThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThresholdInput"></a>

```go
func AutoDeployConfidenceThresholdInput() *f64
```

- *Type:* *f64

---

##### `AutoDeployExpirationSecInput`<sup>Optional</sup> <a name="AutoDeployExpirationSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSecInput"></a>

```go
func AutoDeployExpirationSecInput() *f64
```

- *Type:* *f64

---

##### `AutoDeployImpactedBaselineThresholdInput`<sup>Optional</sup> <a name="AutoDeployImpactedBaselineThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThresholdInput"></a>

```go
func AutoDeployImpactedBaselineThresholdInput() *f64
```

- *Type:* *f64

---

##### `AutoDeployLoadThresholdInput`<sup>Optional</sup> <a name="AutoDeployLoadThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThresholdInput"></a>

```go
func AutoDeployLoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `DetectionAbsoluteQpsInput`<sup>Optional</sup> <a name="DetectionAbsoluteQpsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQpsInput"></a>

```go
func DetectionAbsoluteQpsInput() *f64
```

- *Type:* *f64

---

##### `DetectionLoadThresholdInput`<sup>Optional</sup> <a name="DetectionLoadThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThresholdInput"></a>

```go
func DetectionLoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `DetectionRelativeToBaselineQpsInput`<sup>Optional</sup> <a name="DetectionRelativeToBaselineQpsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQpsInput"></a>

```go
func DetectionRelativeToBaselineQpsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TrafficGranularityConfigsInput`<sup>Optional</sup> <a name="TrafficGranularityConfigsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigsInput"></a>

```go
func TrafficGranularityConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoDeployConfidenceThreshold`<sup>Required</sup> <a name="AutoDeployConfidenceThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold"></a>

```go
func AutoDeployConfidenceThreshold() *f64
```

- *Type:* *f64

---

##### `AutoDeployExpirationSec`<sup>Required</sup> <a name="AutoDeployExpirationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec"></a>

```go
func AutoDeployExpirationSec() *f64
```

- *Type:* *f64

---

##### `AutoDeployImpactedBaselineThreshold`<sup>Required</sup> <a name="AutoDeployImpactedBaselineThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold"></a>

```go
func AutoDeployImpactedBaselineThreshold() *f64
```

- *Type:* *f64

---

##### `AutoDeployLoadThreshold`<sup>Required</sup> <a name="AutoDeployLoadThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold"></a>

```go
func AutoDeployLoadThreshold() *f64
```

- *Type:* *f64

---

##### `DetectionAbsoluteQps`<sup>Required</sup> <a name="DetectionAbsoluteQps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps"></a>

```go
func DetectionAbsoluteQps() *f64
```

- *Type:* *f64

---

##### `DetectionLoadThreshold`<sup>Required</sup> <a name="DetectionLoadThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold"></a>

```go
func DetectionLoadThreshold() *f64
```

- *Type:* *f64

---

##### `DetectionRelativeToBaselineQps`<sup>Required</sup> <a name="DetectionRelativeToBaselineQps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps"></a>

```go
func DetectionRelativeToBaselineQps() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetEnableEachUniqueValue">ResetEnableEachUniqueValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableEachUniqueValue` <a name="ResetEnableEachUniqueValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetEnableEachUniqueValue"></a>

```go
func ResetEnableEachUniqueValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValueInput">EnableEachUniqueValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue">EnableEachUniqueValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableEachUniqueValueInput`<sup>Optional</sup> <a name="EnableEachUniqueValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValueInput"></a>

```go
func EnableEachUniqueValueInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `EnableEachUniqueValue`<sup>Required</sup> <a name="EnableEachUniqueValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue"></a>

```go
func EnableEachUniqueValue() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig">PutLayer7DdosDefenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resetLayer7DdosDefenseConfig">ResetLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer7DdosDefenseConfig` <a name="PutLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig"></a>

```go
func PutLayer7DdosDefenseConfig(value ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---

##### `ResetLayer7DdosDefenseConfig` <a name="ResetLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resetLayer7DdosDefenseConfig"></a>

```go
func ResetLayer7DdosDefenseConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig">Layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfigInput">Layer7DdosDefenseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer7DdosDefenseConfig`<sup>Required</sup> <a name="Layer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig"></a>

```go
func Layer7DdosDefenseConfig() ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference</a>

---

##### `Layer7DdosDefenseConfigInput`<sup>Optional</sup> <a name="Layer7DdosDefenseConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfigInput"></a>

```go
func Layer7DdosDefenseConfigInput() ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---


### ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">ContentTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypesInput`<sup>Optional</sup> <a name="ContentTypesInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```go
func ContentTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```go
func ContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### ComputeSecurityPolicyAdvancedOptionsConfigOutputReference <a name="ComputeSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyAdvancedOptionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyAdvancedOptionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">PutJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">ResetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">ResetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">ResetUserIpRequestHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonCustomConfig` <a name="PutJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```go
func PutJsonCustomConfig(value ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `ResetJsonCustomConfig` <a name="ResetJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```go
func ResetJsonCustomConfig()
```

##### `ResetJsonParsing` <a name="ResetJsonParsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```go
func ResetJsonParsing()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetUserIpRequestHeaders` <a name="ResetUserIpRequestHeaders" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```go
func ResetUserIpRequestHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">JsonCustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">JsonParsingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">UserIpRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```go
func JsonCustomConfig() ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `JsonCustomConfigInput`<sup>Optional</sup> <a name="JsonCustomConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```go
func JsonCustomConfigInput() ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `JsonParsingInput`<sup>Optional</sup> <a name="JsonParsingInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```go
func JsonParsingInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `UserIpRequestHeadersInput`<sup>Optional</sup> <a name="UserIpRequestHeadersInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```go
func UserIpRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```go
func JsonParsing() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```go
func UserIpRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---


### ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference <a name="ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKeyInput">RedirectSiteKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey">RedirectSiteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectSiteKeyInput`<sup>Optional</sup> <a name="RedirectSiteKeyInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKeyInput"></a>

```go
func RedirectSiteKeyInput() *string
```

- *Type:* *string

---

##### `RedirectSiteKey`<sup>Required</sup> <a name="RedirectSiteKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey"></a>

```go
func RedirectSiteKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---


### ComputeSecurityPolicyRuleHeaderActionOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">PutRequestHeadersToAdds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdds` <a name="PutRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```go
func PutRequestHeadersToAdds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">RequestHeadersToAddsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```go
func RequestHeadersToAdds() ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `RequestHeadersToAddsInput`<sup>Optional</sup> <a name="RequestHeadersToAddsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```go
func RequestHeadersToAddsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleList <a name="ComputeSecurityPolicyRuleList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleMatchExprOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchExprOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions">PutRecaptchaOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecaptchaOptions` <a name="PutRecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions"></a>

```go
func PutRecaptchaOptions(value ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptionsInput">RecaptchaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions"></a>

```go
func RecaptchaOptions() ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference</a>

---

##### `RecaptchaOptionsInput`<sup>Optional</sup> <a name="RecaptchaOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptionsInput"></a>

```go
func RecaptchaOptionsInput() ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetActionTokenSiteKeys">ResetActionTokenSiteKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetSessionTokenSiteKeys">ResetSessionTokenSiteKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionTokenSiteKeys` <a name="ResetActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetActionTokenSiteKeys"></a>

```go
func ResetActionTokenSiteKeys()
```

##### `ResetSessionTokenSiteKeys` <a name="ResetSessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetSessionTokenSiteKeys"></a>

```go
func ResetSessionTokenSiteKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeysInput">ActionTokenSiteKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeysInput">SessionTokenSiteKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTokenSiteKeysInput`<sup>Optional</sup> <a name="ActionTokenSiteKeysInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeysInput"></a>

```go
func ActionTokenSiteKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTokenSiteKeysInput`<sup>Optional</sup> <a name="SessionTokenSiteKeysInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeysInput"></a>

```go
func SessionTokenSiteKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ActionTokenSiteKeys`<sup>Required</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys"></a>

```go
func ActionTokenSiteKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTokenSiteKeys`<sup>Required</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys"></a>

```go
func SessionTokenSiteKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---


### ComputeSecurityPolicyRuleMatchExprOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleMatchExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---


### ComputeSecurityPolicyRuleMatchOutputReference <a name="ComputeSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExprOptions">PutExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExprOptions">ResetExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```go
func PutConfig(value ComputeSecurityPolicyRuleMatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```go
func PutExpr(value ComputeSecurityPolicyRuleMatchExpr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---

##### `PutExprOptions` <a name="PutExprOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExprOptions"></a>

```go
func PutExprOptions(value ComputeSecurityPolicyRuleMatchExprOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExprOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```go
func ResetExpr()
```

##### `ResetExprOptions` <a name="ResetExprOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExprOptions"></a>

```go
func ResetExprOptions()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference">ComputeSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference">ComputeSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptionsInput">ExprOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.config"></a>

```go
func Config() ComputeSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference">ComputeSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```go
func Expr() ComputeSecurityPolicyRuleMatchExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference">ComputeSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `ExprOptions`<sup>Required</sup> <a name="ExprOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions"></a>

```go
func ExprOptions() ComputeSecurityPolicyRuleMatchExprOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```go
func ConfigInput() ComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```go
func ExprInput() ComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---

##### `ExprOptionsInput`<sup>Optional</sup> <a name="ExprOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptionsInput"></a>

```go
func ExprOptionsInput() ComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---


### ComputeSecurityPolicyRuleOutputReference <a name="ComputeSecurityPolicyRuleOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions">PutRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRedirectOptions">ResetRedirectOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction"></a>

```go
func PutHeaderAction(value ComputeSecurityPolicyRuleHeaderAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch"></a>

```go
func PutMatch(value ComputeSecurityPolicyRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putPreconfiguredWafConfig"></a>

```go
func PutPreconfiguredWafConfig(value ComputeSecurityPolicyRulePreconfiguredWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions"></a>

```go
func PutRateLimitOptions(value ComputeSecurityPolicyRuleRateLimitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---

##### `PutRedirectOptions` <a name="PutRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions"></a>

```go
func PutRedirectOptions(value ComputeSecurityPolicyRuleRedirectOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetHeaderAction"></a>

```go
func ResetHeaderAction()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreconfiguredWafConfig"></a>

```go
func ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRateLimitOptions"></a>

```go
func ResetRateLimitOptions()
```

##### `ResetRedirectOptions` <a name="ResetRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRedirectOptions"></a>

```go
func ResetRedirectOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference">ComputeSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference">ComputeSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptionsInput">RedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerAction"></a>

```go
func HeaderAction() ComputeSecurityPolicyRuleHeaderActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference">ComputeSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.match"></a>

```go
func Match() ComputeSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference">ComputeSecurityPolicyRuleMatchOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig"></a>

```go
func PreconfiguredWafConfig() ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions"></a>

```go
func RateLimitOptions() ComputeSecurityPolicyRuleRateLimitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsOutputReference</a>

---

##### `RedirectOptions`<sup>Required</sup> <a name="RedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptions"></a>

```go
func RedirectOptions() ComputeSecurityPolicyRuleRedirectOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerActionInput"></a>

```go
func HeaderActionInput() ComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.matchInput"></a>

```go
func MatchInput() ComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfigInput"></a>

```go
func PreconfiguredWafConfigInput() ComputeSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptionsInput"></a>

```go
func RateLimitOptionsInput() ComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---

##### `RedirectOptionsInput`<sup>Optional</sup> <a name="RedirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptionsInput"></a>

```go
func RedirectOptionsInput() ComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```go
func PutRequestCookie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```go
func PutRequestQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```go
func PutRequestUri(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```go
func ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```go
func ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```go
func ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```go
func ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```go
func RequestCookie() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```go
func RequestHeader() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```go
func RequestQueryParam() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```go
func RequestUri() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```go
func RequestCookieInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```go
func RequestQueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```go
func TargetRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```go
func TargetRuleSetInput() *string
```

- *Type:* *string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```go
func TargetRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```go
func TargetRuleSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```go
func Exclusion() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```go
func ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```go
func EnforceOnKeyTypeInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```go
func EnforceOnKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRateLimitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions">PutExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedRedirectOptions">ResetExceedRedirectOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold"></a>

```go
func PutBanThreshold(value ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```go
func PutEnforceOnKeyConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExceedRedirectOptions` <a name="PutExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions"></a>

```go
func PutExceedRedirectOptions(value ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```go
func PutRateLimitThreshold(value ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```go
func ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold"></a>

```go
func ResetBanThreshold()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```go
func ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```go
func ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetExceedRedirectOptions` <a name="ResetExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedRedirectOptions"></a>

```go
func ResetExceedRedirectOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptionsInput">ExceedRedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```go
func BanThreshold() ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```go
func EnforceOnKeyConfigs() ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `ExceedRedirectOptions`<sup>Required</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions"></a>

```go
func ExceedRedirectOptions() ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```go
func RateLimitThreshold() ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```go
func BanDurationSecInput() *f64
```

- *Type:* *f64

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```go
func BanThresholdInput() ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput"></a>

```go
func ConformActionInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```go
func EnforceOnKeyConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```go
func EnforceOnKeyInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```go
func ExceedActionInput() *string
```

- *Type:* *string

---

##### `ExceedRedirectOptionsInput`<sup>Optional</sup> <a name="ExceedRedirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptionsInput"></a>

```go
func ExceedRedirectOptionsInput() ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```go
func RateLimitThresholdInput() ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```go
func BanDurationSec() *f64
```

- *Type:* *f64

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```go
func ConformAction() *string
```

- *Type:* *string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```go
func EnforceOnKey() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```go
func ExceedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### ComputeSecurityPolicyRuleRedirectOptionsOutputReference <a name="ComputeSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyRuleRedirectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRedirectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---


### ComputeSecurityPolicyTimeoutsOutputReference <a name="ComputeSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesecuritypolicy"

computesecuritypolicy.NewComputeSecurityPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



