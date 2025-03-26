# `networkSecurityAuthzPolicy` Submodule <a name="`networkSecurityAuthzPolicy` Submodule" id="@cdktf/provider-google.networkSecurityAuthzPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityAuthzPolicy <a name="NetworkSecurityAuthzPolicy" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy google_network_security_authz_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicy(scope Construct, id *string, config NetworkSecurityAuthzPolicyConfig) NetworkSecurityAuthzPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig">NetworkSecurityAuthzPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig">NetworkSecurityAuthzPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putCustomProvider">PutCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putHttpRules">PutHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetCustomProvider">ResetCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetHttpRules">ResetHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomProvider` <a name="PutCustomProvider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putCustomProvider"></a>

```go
func PutCustomProvider(value NetworkSecurityAuthzPolicyCustomProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putCustomProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a>

---

##### `PutHttpRules` <a name="PutHttpRules" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putHttpRules"></a>

```go
func PutHttpRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putHttpRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putTarget"></a>

```go
func PutTarget(value NetworkSecurityAuthzPolicyTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityAuthzPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts">NetworkSecurityAuthzPolicyTimeouts</a>

---

##### `ResetCustomProvider` <a name="ResetCustomProvider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetCustomProvider"></a>

```go
func ResetCustomProvider()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpRules` <a name="ResetHttpRules" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetHttpRules"></a>

```go
func ResetHttpRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NetworkSecurityAuthzPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NetworkSecurityAuthzPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NetworkSecurityAuthzPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NetworkSecurityAuthzPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityAuthzPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityAuthzPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityAuthzPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.customProvider">CustomProvider</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference">NetworkSecurityAuthzPolicyCustomProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.httpRules">HttpRules</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList">NetworkSecurityAuthzPolicyHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference">NetworkSecurityAuthzPolicyTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference">NetworkSecurityAuthzPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.customProviderInput">CustomProviderInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.httpRulesInput">HttpRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomProvider`<sup>Required</sup> <a name="CustomProvider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.customProvider"></a>

```go
func CustomProvider() NetworkSecurityAuthzPolicyCustomProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference">NetworkSecurityAuthzPolicyCustomProviderOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HttpRules`<sup>Required</sup> <a name="HttpRules" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.httpRules"></a>

```go
func HttpRules() NetworkSecurityAuthzPolicyHttpRulesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList">NetworkSecurityAuthzPolicyHttpRulesList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.target"></a>

```go
func Target() NetworkSecurityAuthzPolicyTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference">NetworkSecurityAuthzPolicyTargetOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityAuthzPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference">NetworkSecurityAuthzPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CustomProviderInput`<sup>Optional</sup> <a name="CustomProviderInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.customProviderInput"></a>

```go
func CustomProviderInput() NetworkSecurityAuthzPolicyCustomProvider
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpRulesInput`<sup>Optional</sup> <a name="HttpRulesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.httpRulesInput"></a>

```go
func HttpRulesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.targetInput"></a>

```go
func TargetInput() NetworkSecurityAuthzPolicyTarget
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityAuthzPolicyConfig <a name="NetworkSecurityAuthzPolicyConfig" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Location: *string,
	Name: *string,
	Target: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget,
	CustomProvider: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider,
	Description: *string,
	HttpRules: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.action">Action</a></code> | <code>*string</code> | When the action is CUSTOM, customProvider must be specified. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Identifier. Name of the AuthzPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.customProvider">CustomProvider</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a></code> | custom_provider block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.httpRules">HttpRules</a></code> | <code>interface{}</code> | http_rules block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#id NetworkSecurityAuthzPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#project NetworkSecurityAuthzPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts">NetworkSecurityAuthzPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

When the action is CUSTOM, customProvider must be specified.

When the action is ALLOW, only requests matching the policy will be allowed.
When the action is DENY, only requests matching the policy will be denied.

When a request arrives, the policies are evaluated in the following order:

1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
2. If there are any DENY policies that match the request, the request is denied.
3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#action NetworkSecurityAuthzPolicy#action}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#location NetworkSecurityAuthzPolicy#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier. Name of the AuthzPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.target"></a>

```go
Target NetworkSecurityAuthzPolicyTarget
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#target NetworkSecurityAuthzPolicy#target}

---

##### `CustomProvider`<sup>Optional</sup> <a name="CustomProvider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.customProvider"></a>

```go
CustomProvider NetworkSecurityAuthzPolicyCustomProvider
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a>

custom_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#custom_provider NetworkSecurityAuthzPolicy#custom_provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#description NetworkSecurityAuthzPolicy#description}

---

##### `HttpRules`<sup>Optional</sup> <a name="HttpRules" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.httpRules"></a>

```go
HttpRules interface{}
```

- *Type:* interface{}

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#http_rules NetworkSecurityAuthzPolicy#http_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#id NetworkSecurityAuthzPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#labels NetworkSecurityAuthzPolicy#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#project NetworkSecurityAuthzPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityAuthzPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts">NetworkSecurityAuthzPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#timeouts NetworkSecurityAuthzPolicy#timeouts}

---

### NetworkSecurityAuthzPolicyCustomProvider <a name="NetworkSecurityAuthzPolicyCustomProvider" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyCustomProvider {
	AuthzExtension: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension,
	CloudIap: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider.property.authzExtension">AuthzExtension</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | authz_extension block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider.property.cloudIap">CloudIap</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | cloud_iap block. |

---

##### `AuthzExtension`<sup>Optional</sup> <a name="AuthzExtension" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider.property.authzExtension"></a>

```go
AuthzExtension NetworkSecurityAuthzPolicyCustomProviderAuthzExtension
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

authz_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#authz_extension NetworkSecurityAuthzPolicy#authz_extension}

---

##### `CloudIap`<sup>Optional</sup> <a name="CloudIap" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider.property.cloudIap"></a>

```go
CloudIap NetworkSecurityAuthzPolicyCustomProviderCloudIap
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

cloud_iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#cloud_iap NetworkSecurityAuthzPolicy#cloud_iap}

---

### NetworkSecurityAuthzPolicyCustomProviderAuthzExtension <a name="NetworkSecurityAuthzPolicyCustomProviderAuthzExtension" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension {
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of references to authorization extensions that will be invoked for requests matching this policy. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of references to authorization extensions that will be invoked for requests matching this policy.

Limited to 1 custom provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}

---

### NetworkSecurityAuthzPolicyCustomProviderCloudIap <a name="NetworkSecurityAuthzPolicyCustomProviderCloudIap" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable Cloud IAP at the AuthzPolicy level. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable Cloud IAP at the AuthzPolicy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#enabled NetworkSecurityAuthzPolicy#enabled}

---

### NetworkSecurityAuthzPolicyHttpRules <a name="NetworkSecurityAuthzPolicyHttpRules" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRules {
	From: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom,
	To: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo,
	When: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.property.from">From</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | from block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.property.to">To</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a></code> | to block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.property.when">When</a></code> | <code>*string</code> | CEL expression that describes the conditions to be satisfied for the action. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.property.from"></a>

```go
From NetworkSecurityAuthzPolicyHttpRulesFrom
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#from NetworkSecurityAuthzPolicy#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.property.to"></a>

```go
To NetworkSecurityAuthzPolicyHttpRulesTo
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#to NetworkSecurityAuthzPolicy#to}

---

##### `When`<sup>Optional</sup> <a name="When" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRules.property.when"></a>

```go
When *string
```

- *Type:* *string

CEL expression that describes the conditions to be satisfied for the action.

The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#when NetworkSecurityAuthzPolicy#when}

---

### NetworkSecurityAuthzPolicyHttpRulesFrom <a name="NetworkSecurityAuthzPolicyHttpRulesFrom" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFrom {
	NotSources: interface{},
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom.property.notSources">NotSources</a></code> | <code>interface{}</code> | not_sources block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `NotSources`<sup>Optional</sup> <a name="NotSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom.property.notSources"></a>

```go
NotSources interface{}
```

- *Type:* interface{}

not_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#not_sources NetworkSecurityAuthzPolicy#not_sources}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#sources NetworkSecurityAuthzPolicy#sources}

---

### NetworkSecurityAuthzPolicyHttpRulesFromNotSources <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources {
	Principals: interface{},
	Resources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.principals">Principals</a></code> | <code>interface{}</code> | principals block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.principals"></a>

```go
Principals interface{}
```

- *Type:* interface{}

principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#principals NetworkSecurityAuthzPolicy#principals}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}

---

### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources {
	IamServiceAccount: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount,
	TagValueIdSet: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | iam_service_account block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | tag_value_id_set block. |

---

##### `IamServiceAccount`<sup>Optional</sup> <a name="IamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.iamServiceAccount"></a>

```go
IamServiceAccount NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

iam_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#iam_service_account NetworkSecurityAuthzPolicy#iam_service_account}

---

##### `TagValueIdSet`<sup>Optional</sup> <a name="TagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.tagValueIdSet"></a>

```go
TagValueIdSet NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

tag_value_id_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#tag_value_id_set NetworkSecurityAuthzPolicy#tag_value_id_set}

---

### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet {
	Ids: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.property.ids">Ids</a></code> | <code>*[]*string</code> | A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. |

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.

The match follows AND semantics which means all the ids must match.
Limited to 5 matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ids NetworkSecurityAuthzPolicy#ids}

---

### NetworkSecurityAuthzPolicyHttpRulesFromSources <a name="NetworkSecurityAuthzPolicyHttpRulesFromSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources {
	Principals: interface{},
	Resources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources.property.principals">Principals</a></code> | <code>interface{}</code> | principals block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources.property.principals"></a>

```go
Principals interface{}
```

- *Type:* interface{}

principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#principals NetworkSecurityAuthzPolicy#principals}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSources.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}

---

### NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources {
	IamServiceAccount: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount,
	TagValueIdSet: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | iam_service_account block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | tag_value_id_set block. |

---

##### `IamServiceAccount`<sup>Optional</sup> <a name="IamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.iamServiceAccount"></a>

```go
IamServiceAccount NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

iam_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#iam_service_account NetworkSecurityAuthzPolicy#iam_service_account}

---

##### `TagValueIdSet`<sup>Optional</sup> <a name="TagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.tagValueIdSet"></a>

```go
TagValueIdSet NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

tag_value_id_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#tag_value_id_set NetworkSecurityAuthzPolicy#tag_value_id_set}

---

### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet {
	Ids: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.property.ids">Ids</a></code> | <code>*[]*string</code> | A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. |

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.

The match follows AND semantics which means all the ids must match.
Limited to 5 matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ids NetworkSecurityAuthzPolicy#ids}

---

### NetworkSecurityAuthzPolicyHttpRulesTo <a name="NetworkSecurityAuthzPolicyHttpRulesTo" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesTo {
	NotOperations: interface{},
	Operations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo.property.notOperations">NotOperations</a></code> | <code>interface{}</code> | not_operations block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |

---

##### `NotOperations`<sup>Optional</sup> <a name="NotOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo.property.notOperations"></a>

```go
NotOperations interface{}
```

- *Type:* interface{}

not_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#not_operations NetworkSecurityAuthzPolicy#not_operations}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#operations NetworkSecurityAuthzPolicy#operations}

---

### NetworkSecurityAuthzPolicyHttpRulesToNotOperations <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations {
	HeaderSet: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet,
	Hosts: interface{},
	Methods: *[]*string,
	Paths: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.headerSet">HeaderSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a></code> | header_set block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.hosts">Hosts</a></code> | <code>interface{}</code> | hosts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.methods">Methods</a></code> | <code>*[]*string</code> | A list of HTTP methods to match against. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.paths">Paths</a></code> | <code>interface{}</code> | paths block. |

---

##### `HeaderSet`<sup>Optional</sup> <a name="HeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.headerSet"></a>

```go
HeaderSet NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a>

header_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#header_set NetworkSecurityAuthzPolicy#header_set}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.hosts"></a>

```go
Hosts interface{}
```

- *Type:* interface{}

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#hosts NetworkSecurityAuthzPolicy#hosts}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

A list of HTTP methods to match against.

Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperations.property.paths"></a>

```go
Paths interface{}
```

- *Type:* interface{}

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#paths NetworkSecurityAuthzPolicy#paths}

---

### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet {
	Headers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#headers NetworkSecurityAuthzPolicy#headers}

---

### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders {
	Name: *string,
	Value: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the header in the request. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a></code> | value block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the header in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders.property.value"></a>

```go
Value NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#value NetworkSecurityAuthzPolicy#value}

---

### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesToOperations <a name="NetworkSecurityAuthzPolicyHttpRulesToOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations {
	HeaderSet: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet,
	Hosts: interface{},
	Methods: *[]*string,
	Paths: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.headerSet">HeaderSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | header_set block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.hosts">Hosts</a></code> | <code>interface{}</code> | hosts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.methods">Methods</a></code> | <code>*[]*string</code> | A list of HTTP methods to match against. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.paths">Paths</a></code> | <code>interface{}</code> | paths block. |

---

##### `HeaderSet`<sup>Optional</sup> <a name="HeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.headerSet"></a>

```go
HeaderSet NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

header_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#header_set NetworkSecurityAuthzPolicy#header_set}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.hosts"></a>

```go
Hosts interface{}
```

- *Type:* interface{}

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#hosts NetworkSecurityAuthzPolicy#hosts}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

A list of HTTP methods to match against.

Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperations.property.paths"></a>

```go
Paths interface{}
```

- *Type:* interface{}

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#paths NetworkSecurityAuthzPolicy#paths}

---

### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet {
	Headers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#headers NetworkSecurityAuthzPolicy#headers}

---

### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders {
	Name: *string,
	Value: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the header in the request. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | value block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the header in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.value"></a>

```go
Value NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#value NetworkSecurityAuthzPolicy#value}

---

### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths {
	Contains: *string,
	Exact: *string,
	IgnoreCase: interface{},
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.contains">Contains</a></code> | <code>*string</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.exact">Exact</a></code> | <code>*string</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.prefix">Prefix</a></code> | <code>*string</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.suffix">Suffix</a></code> | <code>*string</code> | The input string must have the suffix specified here. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}

---

### NetworkSecurityAuthzPolicyTarget <a name="NetworkSecurityAuthzPolicyTarget" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyTarget {
	LoadBalancingScheme: *string,
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of references to the Forwarding Rules on which this policy will be applied. |

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#load_balancing_scheme NetworkSecurityAuthzPolicy#load_balancing_scheme}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of references to the Forwarding Rules on which this policy will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}

---

### NetworkSecurityAuthzPolicyTimeouts <a name="NetworkSecurityAuthzPolicyTimeouts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

&networksecurityauthzpolicy.NetworkSecurityAuthzPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#create NetworkSecurityAuthzPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#delete NetworkSecurityAuthzPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#update NetworkSecurityAuthzPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#create NetworkSecurityAuthzPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#delete NetworkSecurityAuthzPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_security_authz_policy#update NetworkSecurityAuthzPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference <a name="NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyCustomProviderAuthzExtension
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---


### NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference <a name="NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyCustomProviderCloudIap
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---


### NetworkSecurityAuthzPolicyCustomProviderOutputReference <a name="NetworkSecurityAuthzPolicyCustomProviderOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyCustomProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyCustomProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension">PutAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap">PutCloudIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resetAuthzExtension">ResetAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resetCloudIap">ResetCloudIap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthzExtension` <a name="PutAuthzExtension" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension"></a>

```go
func PutAuthzExtension(value NetworkSecurityAuthzPolicyCustomProviderAuthzExtension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---

##### `PutCloudIap` <a name="PutCloudIap" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap"></a>

```go
func PutCloudIap(value NetworkSecurityAuthzPolicyCustomProviderCloudIap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---

##### `ResetAuthzExtension` <a name="ResetAuthzExtension" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resetAuthzExtension"></a>

```go
func ResetAuthzExtension()
```

##### `ResetCloudIap` <a name="ResetCloudIap" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.resetCloudIap"></a>

```go
func ResetCloudIap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtension">AuthzExtension</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference">NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIap">CloudIap</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference">NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtensionInput">AuthzExtensionInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIapInput">CloudIapInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthzExtension`<sup>Required</sup> <a name="AuthzExtension" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtension"></a>

```go
func AuthzExtension() NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference">NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference</a>

---

##### `CloudIap`<sup>Required</sup> <a name="CloudIap" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIap"></a>

```go
func CloudIap() NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference">NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference</a>

---

##### `AuthzExtensionInput`<sup>Optional</sup> <a name="AuthzExtensionInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtensionInput"></a>

```go
func AuthzExtensionInput() NetworkSecurityAuthzPolicyCustomProviderAuthzExtension
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderAuthzExtension">NetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---

##### `CloudIapInput`<sup>Optional</sup> <a name="CloudIapInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIapInput"></a>

```go
func CloudIapInput() NetworkSecurityAuthzPolicyCustomProviderCloudIap
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderCloudIap">NetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyCustomProvider
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyCustomProvider">NetworkSecurityAuthzPolicyCustomProvider</a>

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals">PutPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipals` <a name="PutPrincipals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals"></a>

```go
func PutPrincipals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principals">Principals</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principals"></a>

```go
func Principals() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resources"></a>

```go
func Resources() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount">PutIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet">PutTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetIamServiceAccount">ResetIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetTagValueIdSet">ResetTagValueIdSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamServiceAccount` <a name="PutIamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount"></a>

```go
func PutIamServiceAccount(value NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---

##### `PutTagValueIdSet` <a name="PutTagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet"></a>

```go
func PutTagValueIdSet(value NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---

##### `ResetIamServiceAccount` <a name="ResetIamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetIamServiceAccount"></a>

```go
func ResetIamServiceAccount()
```

##### `ResetTagValueIdSet` <a name="ResetTagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetTagValueIdSet"></a>

```go
func ResetTagValueIdSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccountInput">IamServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSetInput">TagValueIdSetInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamServiceAccount`<sup>Required</sup> <a name="IamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccount"></a>

```go
func IamServiceAccount() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference</a>

---

##### `TagValueIdSet`<sup>Required</sup> <a name="TagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSet"></a>

```go
func TagValueIdSet() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference</a>

---

##### `IamServiceAccountInput`<sup>Optional</sup> <a name="IamServiceAccountInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccountInput"></a>

```go
func IamServiceAccountInput() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---

##### `TagValueIdSetInput`<sup>Optional</sup> <a name="TagValueIdSetInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSetInput"></a>

```go
func TagValueIdSetInput() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resetIds"></a>

```go
func ResetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---


### NetworkSecurityAuthzPolicyHttpRulesFromOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources">PutNotSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetNotSources">ResetNotSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotSources` <a name="PutNotSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources"></a>

```go
func PutNotSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotSources` <a name="ResetNotSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetNotSources"></a>

```go
func ResetNotSources()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSources">NotSources</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList">NetworkSecurityAuthzPolicyHttpRulesFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSourcesInput">NotSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotSources`<sup>Required</sup> <a name="NotSources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSources"></a>

```go
func NotSources() NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList">NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sources"></a>

```go
func Sources() NetworkSecurityAuthzPolicyHttpRulesFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList">NetworkSecurityAuthzPolicyHttpRulesFromSourcesList</a>

---

##### `NotSourcesInput`<sup>Optional</sup> <a name="NotSourcesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSourcesInput"></a>

```go
func NotSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesFrom
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a>

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesList <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals">PutPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipals` <a name="PutPrincipals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals"></a>

```go
func PutPrincipals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principals">Principals</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList">NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principals"></a>

```go
func Principals() NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList">NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resources"></a>

```go
func Resources() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount">PutIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet">PutTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetIamServiceAccount">ResetIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetTagValueIdSet">ResetTagValueIdSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamServiceAccount` <a name="PutIamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount"></a>

```go
func PutIamServiceAccount(value NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---

##### `PutTagValueIdSet` <a name="PutTagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet"></a>

```go
func PutTagValueIdSet(value NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---

##### `ResetIamServiceAccount` <a name="ResetIamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetIamServiceAccount"></a>

```go
func ResetIamServiceAccount()
```

##### `ResetTagValueIdSet` <a name="ResetTagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetTagValueIdSet"></a>

```go
func ResetTagValueIdSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccount">IamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSet">TagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccountInput">IamServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSetInput">TagValueIdSetInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamServiceAccount`<sup>Required</sup> <a name="IamServiceAccount" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccount"></a>

```go
func IamServiceAccount() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference</a>

---

##### `TagValueIdSet`<sup>Required</sup> <a name="TagValueIdSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSet"></a>

```go
func TagValueIdSet() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference</a>

---

##### `IamServiceAccountInput`<sup>Optional</sup> <a name="IamServiceAccountInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccountInput"></a>

```go
func IamServiceAccountInput() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---

##### `TagValueIdSetInput`<sup>Optional</sup> <a name="TagValueIdSetInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSetInput"></a>

```go
func TagValueIdSetInput() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resetIds"></a>

```go
func ResetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---


### NetworkSecurityAuthzPolicyHttpRulesList <a name="NetworkSecurityAuthzPolicyHttpRulesList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resetTo">ResetTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resetWhen">ResetWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom"></a>

```go
func PutFrom(value NetworkSecurityAuthzPolicyHttpRulesFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a>

---

##### `PutTo` <a name="PutTo" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo"></a>

```go
func PutTo(value NetworkSecurityAuthzPolicyHttpRulesTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a>

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resetTo"></a>

```go
func ResetTo()
```

##### `ResetWhen` <a name="ResetWhen" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.resetWhen"></a>

```go
func ResetWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.from">From</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.to">To</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference">NetworkSecurityAuthzPolicyHttpRulesToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fromInput">FromInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.toInput">ToInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.whenInput">WhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.when">When</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.from"></a>

```go
func From() NetworkSecurityAuthzPolicyHttpRulesFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFromOutputReference">NetworkSecurityAuthzPolicyHttpRulesFromOutputReference</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.to"></a>

```go
func To() NetworkSecurityAuthzPolicyHttpRulesToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference">NetworkSecurityAuthzPolicyHttpRulesToOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fromInput"></a>

```go
func FromInput() NetworkSecurityAuthzPolicyHttpRulesFrom
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesFrom">NetworkSecurityAuthzPolicyHttpRulesFrom</a>

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.toInput"></a>

```go
func ToInput() NetworkSecurityAuthzPolicyHttpRulesTo
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a>

---

##### `WhenInput`<sup>Optional</sup> <a name="WhenInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.whenInput"></a>

```go
func WhenInput() *string
```

- *Type:* *string

---

##### `When`<sup>Required</sup> <a name="When" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.when"></a>

```go
func When() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.putValue"></a>

```go
func PutValue(value NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.value"></a>

```go
func Value() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue</a>

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.headers"></a>

```go
func Headers() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a>

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putHeaderSet">PutHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putPaths">PutPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetHeaderSet">ResetHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderSet` <a name="PutHeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putHeaderSet"></a>

```go
func PutHeaderSet(value NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putHeaderSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a>

---

##### `PutHosts` <a name="PutHosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putHosts"></a>

```go
func PutHosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putHosts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPaths` <a name="PutPaths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putPaths"></a>

```go
func PutPaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.putPaths.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaderSet` <a name="ResetHeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetHeaderSet"></a>

```go
func ResetHeaderSet()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetMethods"></a>

```go
func ResetMethods()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.headerSet">HeaderSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.paths">Paths</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.headerSetInput">HeaderSetInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.hostsInput">HostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.pathsInput">PathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderSet`<sup>Required</sup> <a name="HeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.headerSet"></a>

```go
func HeaderSet() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.hosts"></a>

```go
func Hosts() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList</a>

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.paths"></a>

```go
func Paths() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList</a>

---

##### `HeaderSetInput`<sup>Optional</sup> <a name="HeaderSetInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.headerSetInput"></a>

```go
func HeaderSetInput() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet</a>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.hostsInput"></a>

```go
func HostsInput() interface{}
```

- *Type:* interface{}

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.pathsInput"></a>

```go
func PathsInput() interface{}
```

- *Type:* interface{}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue"></a>

```go
func PutValue(value NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.value"></a>

```go
func Value() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headers"></a>

```go
func Headers() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsList <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet">PutHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths">PutPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHeaderSet">ResetHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderSet` <a name="PutHeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet"></a>

```go
func PutHeaderSet(value NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---

##### `PutHosts` <a name="PutHosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts"></a>

```go
func PutHosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPaths` <a name="PutPaths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths"></a>

```go
func PutPaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaderSet` <a name="ResetHeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHeaderSet"></a>

```go
func ResetHeaderSet()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetMethods"></a>

```go
func ResetMethods()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSet">HeaderSet</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList">NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.paths">Paths</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList">NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSetInput">HeaderSetInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hostsInput">HostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.pathsInput">PathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderSet`<sup>Required</sup> <a name="HeaderSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSet"></a>

```go
func HeaderSet() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hosts"></a>

```go
func Hosts() NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList">NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList</a>

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.paths"></a>

```go
func Paths() NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList">NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList</a>

---

##### `HeaderSetInput`<sup>Optional</sup> <a name="HeaderSetInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSetInput"></a>

```go
func HeaderSetInput() NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hostsInput"></a>

```go
func HostsInput() interface{}
```

- *Type:* interface{}

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.pathsInput"></a>

```go
func PathsInput() interface{}
```

- *Type:* interface{}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get"></a>

```go
func Get(index *f64) NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityAuthzPolicyHttpRulesToOutputReference <a name="NetworkSecurityAuthzPolicyHttpRulesToOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyHttpRulesToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyHttpRulesToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.putNotOperations">PutNotOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetNotOperations">ResetNotOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotOperations` <a name="PutNotOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.putNotOperations"></a>

```go
func PutNotOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.putNotOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotOperations` <a name="ResetNotOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetNotOperations"></a>

```go
func ResetNotOperations()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.notOperations">NotOperations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList">NetworkSecurityAuthzPolicyHttpRulesToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.notOperationsInput">NotOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotOperations`<sup>Required</sup> <a name="NotOperations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.notOperations"></a>

```go
func NotOperations() NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList">NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList</a>

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operations"></a>

```go
func Operations() NetworkSecurityAuthzPolicyHttpRulesToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOperationsList">NetworkSecurityAuthzPolicyHttpRulesToOperationsList</a>

---

##### `NotOperationsInput`<sup>Optional</sup> <a name="NotOperationsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.notOperationsInput"></a>

```go
func NotOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyHttpRulesTo
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyHttpRulesTo">NetworkSecurityAuthzPolicyHttpRulesTo</a>

---


### NetworkSecurityAuthzPolicyTargetOutputReference <a name="NetworkSecurityAuthzPolicyTargetOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityAuthzPolicyTarget
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTarget">NetworkSecurityAuthzPolicyTarget</a>

---


### NetworkSecurityAuthzPolicyTimeoutsOutputReference <a name="NetworkSecurityAuthzPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityauthzpolicy"

networksecurityauthzpolicy.NewNetworkSecurityAuthzPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAuthzPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAuthzPolicy.NetworkSecurityAuthzPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



