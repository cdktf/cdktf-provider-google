# `bigtableGcPolicy` Submodule <a name="`bigtableGcPolicy` Submodule" id="@cdktf/provider-google.bigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableGcPolicy <a name="BigtableGcPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.NewBigtableGcPolicy(scope Construct, id *string, config BigtableGcPolicyConfig) BigtableGcPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig">BigtableGcPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig">BigtableGcPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge">PutMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion">PutMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules">ResetGcRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion">ResetMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaxAge` <a name="PutMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge"></a>

```go
func PutMaxAge(value BigtableGcPolicyMaxAge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `PutMaxVersion` <a name="PutMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion"></a>

```go
func PutMaxVersion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts"></a>

```go
func PutTimeouts(value BigtableGcPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetGcRules` <a name="ResetGcRules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules"></a>

```go
func ResetGcRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetIgnoreWarnings"></a>

```go
func ResetIgnoreWarnings()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge"></a>

```go
func ResetMaxAge()
```

##### `ResetMaxVersion` <a name="ResetMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion"></a>

```go
func ResetMaxVersion()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode"></a>

```go
func ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableGcPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.BigtableGcPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.BigtableGcPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.BigtableGcPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.BigtableGcPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigtableGcPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigtableGcPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigtableGcPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigtableGcPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge">MaxAge</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion">MaxVersion</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference">BigtableGcPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput">ColumnFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput">GcRulesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput">MaxAgeInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput">MaxVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily">ColumnFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules">GcRules</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table">Table</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge"></a>

```go
func MaxAge() BigtableGcPolicyMaxAgeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a>

---

##### `MaxVersion`<sup>Required</sup> <a name="MaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion"></a>

```go
func MaxVersion() BigtableGcPolicyMaxVersionList
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeouts"></a>

```go
func Timeouts() BigtableGcPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference">BigtableGcPolicyTimeoutsOutputReference</a>

---

##### `ColumnFamilyInput`<sup>Optional</sup> <a name="ColumnFamilyInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput"></a>

```go
func ColumnFamilyInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `GcRulesInput`<sup>Optional</sup> <a name="GcRulesInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput"></a>

```go
func GcRulesInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarningsInput"></a>

```go
func IgnoreWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput"></a>

```go
func MaxAgeInput() BigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `MaxVersionInput`<sup>Optional</sup> <a name="MaxVersionInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput"></a>

```go
func MaxVersionInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily"></a>

```go
func ColumnFamily() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `GcRules`<sup>Required</sup> <a name="GcRules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules"></a>

```go
func GcRules() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarnings"></a>

```go
func IgnoreWarnings() interface{}
```

- *Type:* interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableGcPolicyConfig <a name="BigtableGcPolicyConfig" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

&bigtablegcpolicy.BigtableGcPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ColumnFamily: *string,
	InstanceName: *string,
	Table: *string,
	DeletionPolicy: *string,
	GcRules: *string,
	Id: *string,
	IgnoreWarnings: interface{},
	MaxAge: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableGcPolicy.BigtableGcPolicyMaxAge,
	MaxVersion: interface{},
	Mode: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableGcPolicy.BigtableGcPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily">ColumnFamily</a></code> | <code>*string</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table">Table</a></code> | <code>*string</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules">GcRules</a></code> | <code>*string</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>interface{}</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge">MaxAge</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion">MaxVersion</a></code> | <code>interface{}</code> | max_version block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode">Mode</a></code> | <code>*string</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily"></a>

```go
ColumnFamily *string
```

- *Type:* *string

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#column_family BigtableGcPolicy#column_family}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#instance_name BigtableGcPolicy#instance_name}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#table BigtableGcPolicy#table}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#deletion_policy BigtableGcPolicy#deletion_policy}

---

##### `GcRules`<sup>Optional</sup> <a name="GcRules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules"></a>

```go
GcRules *string
```

- *Type:* *string

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#gc_rules BigtableGcPolicy#gc_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.ignoreWarnings"></a>

```go
IgnoreWarnings interface{}
```

- *Type:* interface{}

Allows ignoring warnings when updating the GC policy.

This can be used
to increase the gc policy on replicated clusters. Doing this may make clusters be
inconsistent for a longer period of time, before using this make sure you understand
the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#ignore_warnings BigtableGcPolicy#ignore_warnings}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge"></a>

```go
MaxAge BigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#max_age BigtableGcPolicy#max_age}

---

##### `MaxVersion`<sup>Optional</sup> <a name="MaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion"></a>

```go
MaxVersion interface{}
```

- *Type:* interface{}

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#max_version BigtableGcPolicy#max_version}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#mode BigtableGcPolicy#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#project BigtableGcPolicy#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.timeouts"></a>

```go
Timeouts BigtableGcPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#timeouts BigtableGcPolicy#timeouts}

---

### BigtableGcPolicyMaxAge <a name="BigtableGcPolicyMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

&bigtablegcpolicy.BigtableGcPolicyMaxAge {
	Days: *f64,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days">Days</a></code> | <code>*f64</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration">Duration</a></code> | <code>*string</code> | Duration before applying GC policy. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#days BigtableGcPolicy#days}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#duration BigtableGcPolicy#duration}

---

### BigtableGcPolicyMaxVersion <a name="BigtableGcPolicyMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

&bigtablegcpolicy.BigtableGcPolicyMaxVersion {
	Number: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number">Number</a></code> | <code>*f64</code> | Number of version before applying the GC policy. |

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number"></a>

```go
Number *f64
```

- *Type:* *f64

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#number BigtableGcPolicy#number}

---

### BigtableGcPolicyTimeouts <a name="BigtableGcPolicyTimeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

&bigtablegcpolicy.BigtableGcPolicyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableGcPolicyMaxAgeOutputReference <a name="BigtableGcPolicyMaxAgeOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.NewBigtableGcPolicyMaxAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableGcPolicyMaxAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```go
func ResetDays()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---


### BigtableGcPolicyMaxVersionList <a name="BigtableGcPolicyMaxVersionList" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.NewBigtableGcPolicyMaxVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigtableGcPolicyMaxVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get"></a>

```go
func Get(index *f64) BigtableGcPolicyMaxVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigtableGcPolicyMaxVersionOutputReference <a name="BigtableGcPolicyMaxVersionOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.NewBigtableGcPolicyMaxVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigtableGcPolicyMaxVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput">NumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```go
func NumberInput() *f64
```

- *Type:* *f64

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigtableGcPolicyTimeoutsOutputReference <a name="BigtableGcPolicyTimeoutsOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtablegcpolicy"

bigtablegcpolicy.NewBigtableGcPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableGcPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



