# `google_gke_hub_feature_membership`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature_membership`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership).

# `gkeHubFeatureMembership` Submodule <a name="`gkeHubFeatureMembership` Submodule" id="@cdktf/provider-google.gkeHubFeatureMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFeatureMembership <a name="GkeHubFeatureMembership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembership(scope Construct, id *string, config GkeHubFeatureMembershipConfig) GkeHubFeatureMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig">GkeHubFeatureMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig">GkeHubFeatureMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement">PutConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh">PutMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetConfigmanagement">ResetConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMesh">ResetMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfigmanagement` <a name="PutConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement"></a>

```go
func PutConfigmanagement(value GkeHubFeatureMembershipConfigmanagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---

##### `PutMesh` <a name="PutMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh"></a>

```go
func PutMesh(value GkeHubFeatureMembershipMesh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts"></a>

```go
func PutTimeouts(value GkeHubFeatureMembershipTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

---

##### `ResetConfigmanagement` <a name="ResetConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetConfigmanagement"></a>

```go
func ResetConfigmanagement()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetId"></a>

```go
func ResetId()
```

##### `ResetMesh` <a name="ResetMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMesh"></a>

```go
func ResetMesh()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.GkeHubFeatureMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.GkeHubFeatureMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.GkeHubFeatureMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.GkeHubFeatureMembership_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeHubFeatureMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeHubFeatureMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubFeatureMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference">GkeHubFeatureMembershipConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference">GkeHubFeatureMembershipMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference">GkeHubFeatureMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagementInput">ConfigmanagementInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.featureInput">FeatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipInput">MembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.meshInput">MeshInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configmanagement`<sup>Required</sup> <a name="Configmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagement"></a>

```go
func Configmanagement() GkeHubFeatureMembershipConfigmanagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference">GkeHubFeatureMembershipConfigmanagementOutputReference</a>

---

##### `Mesh`<sup>Required</sup> <a name="Mesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.mesh"></a>

```go
func Mesh() GkeHubFeatureMembershipMeshOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference">GkeHubFeatureMembershipMeshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeouts"></a>

```go
func Timeouts() GkeHubFeatureMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference">GkeHubFeatureMembershipTimeoutsOutputReference</a>

---

##### `ConfigmanagementInput`<sup>Optional</sup> <a name="ConfigmanagementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagementInput"></a>

```go
func ConfigmanagementInput() GkeHubFeatureMembershipConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.featureInput"></a>

```go
func FeatureInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipInput"></a>

```go
func MembershipInput() *string
```

- *Type:* *string

---

##### `MeshInput`<sup>Optional</sup> <a name="MeshInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.meshInput"></a>

```go
func MeshInput() GkeHubFeatureMembershipMesh
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFeatureMembershipConfig <a name="GkeHubFeatureMembershipConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Feature: *string,
	Location: *string,
	Membership: *string,
	Configmanagement: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement,
	Id: *string,
	Mesh: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.feature">Feature</a></code> | <code>*string</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.location">Location</a></code> | <code>*string</code> | The location of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membership">Membership</a></code> | <code>*string</code> | The name of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | mesh block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.project">Project</a></code> | <code>*string</code> | The project of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.feature"></a>

```go
Feature *string
```

- *Type:* *string

The name of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#feature GkeHubFeatureMembership#feature}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#location GkeHubFeatureMembership#location}

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membership"></a>

```go
Membership *string
```

- *Type:* *string

The name of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#membership GkeHubFeatureMembership#membership}

---

##### `Configmanagement`<sup>Optional</sup> <a name="Configmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.configmanagement"></a>

```go
Configmanagement GkeHubFeatureMembershipConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#configmanagement GkeHubFeatureMembership#configmanagement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mesh`<sup>Optional</sup> <a name="Mesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.mesh"></a>

```go
Mesh GkeHubFeatureMembershipMesh
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#mesh GkeHubFeatureMembership#mesh}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#project GkeHubFeatureMembership#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.timeouts"></a>

```go
Timeouts GkeHubFeatureMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#timeouts GkeHubFeatureMembership#timeouts}

---

### GkeHubFeatureMembershipConfigmanagement <a name="GkeHubFeatureMembershipConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagement {
	Binauthz: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz,
	ConfigSync: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync,
	HierarchyController: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController,
	PolicyController: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | binauthz block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | config_sync block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | hierarchy_controller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | policy_controller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.version">Version</a></code> | <code>*string</code> | Optional. Version of ACM to install. Defaults to the latest version. |

---

##### `Binauthz`<sup>Optional</sup> <a name="Binauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.binauthz"></a>

```go
Binauthz GkeHubFeatureMembershipConfigmanagementBinauthz
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

binauthz block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#binauthz GkeHubFeatureMembership#binauthz}

---

##### `ConfigSync`<sup>Optional</sup> <a name="ConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.configSync"></a>

```go
ConfigSync GkeHubFeatureMembershipConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#config_sync GkeHubFeatureMembership#config_sync}

---

##### `HierarchyController`<sup>Optional</sup> <a name="HierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.hierarchyController"></a>

```go
HierarchyController GkeHubFeatureMembershipConfigmanagementHierarchyController
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

hierarchy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#hierarchy_controller GkeHubFeatureMembership#hierarchy_controller}

---

##### `PolicyController`<sup>Optional</sup> <a name="PolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.policyController"></a>

```go
PolicyController GkeHubFeatureMembershipConfigmanagementPolicyController
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

policy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#policy_controller GkeHubFeatureMembership#policy_controller}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.version"></a>

```go
Version *string
```

- *Type:* *string

Optional. Version of ACM to install. Defaults to the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}

---

### GkeHubFeatureMembershipConfigmanagementBinauthz <a name="GkeHubFeatureMembershipConfigmanagementBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementBinauthz {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether binauthz is enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether binauthz is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

### GkeHubFeatureMembershipConfigmanagementConfigSync <a name="GkeHubFeatureMembershipConfigmanagementConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementConfigSync {
	Git: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit,
	Oci: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci,
	PreventDrift: interface{},
	SourceFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift">PreventDrift</a></code> | <code>interface{}</code> | Set to true to enable the Config Sync admission webhook to prevent drifts. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. |

---

##### `Git`<sup>Optional</sup> <a name="Git" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.git"></a>

```go
Git GkeHubFeatureMembershipConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#git GkeHubFeatureMembership#git}

---

##### `Oci`<sup>Optional</sup> <a name="Oci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.oci"></a>

```go
Oci GkeHubFeatureMembershipConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#oci GkeHubFeatureMembership#oci}

---

##### `PreventDrift`<sup>Optional</sup> <a name="PreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift"></a>

```go
PreventDrift interface{}
```

- *Type:* interface{}

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#prevent_drift GkeHubFeatureMembership#prevent_drift}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat"></a>

```go
SourceFormat *string
```

- *Type:* *string

Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#source_format GkeHubFeatureMembership#source_format}

---

### GkeHubFeatureMembershipConfigmanagementConfigSyncGit <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit {
	GcpServiceAccountEmail: *string,
	HttpsProxy: *string,
	PolicyDir: *string,
	SecretType: *string,
	SyncBranch: *string,
	SyncRepo: *string,
	SyncRev: *string,
	SyncWaitSecs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | The GCP Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy">HttpsProxy</a></code> | <code>*string</code> | URL for the HTTPS proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir">PolicyDir</a></code> | <code>*string</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType">SecretType</a></code> | <code>*string</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch">SyncBranch</a></code> | <code>*string</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev">SyncRev</a></code> | <code>*string</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```go
GcpServiceAccountEmail *string
```

- *Type:* *string

The GCP Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```go
HttpsProxy *string
```

- *Type:* *string

URL for the HTTPS proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#https_proxy GkeHubFeatureMembership#https_proxy}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir"></a>

```go
PolicyDir *string
```

- *Type:* *string

The path within the Git repository that represents the top level of the repo to sync.

Default: the root directory of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Type of secret configured for access to the Git repo.

Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}

---

##### `SyncBranch`<sup>Optional</sup> <a name="SyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch"></a>

```go
SyncBranch *string
```

- *Type:* *string

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_branch GkeHubFeatureMembership#sync_branch}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo"></a>

```go
SyncRepo *string
```

- *Type:* *string

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}

---

##### `SyncRev`<sup>Optional</sup> <a name="SyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev"></a>

```go
SyncRev *string
```

- *Type:* *string

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_rev GkeHubFeatureMembership#sync_rev}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```go
SyncWaitSecs *string
```

- *Type:* *string

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}

---

### GkeHubFeatureMembershipConfigmanagementConfigSyncOci <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci {
	GcpServiceAccountEmail: *string,
	PolicyDir: *string,
	SecretType: *string,
	SyncRepo: *string,
	SyncWaitSecs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir">PolicyDir</a></code> | <code>*string</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType">SecretType</a></code> | <code>*string</code> | Type of secret configured for access to the OCI Image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | Period in seconds(int64 format) between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```go
GcpServiceAccountEmail *string
```

- *Type:* *string

The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir"></a>

```go
PolicyDir *string
```

- *Type:* *string

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Type of secret configured for access to the OCI Image.

Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo"></a>

```go
SyncRepo *string
```

- *Type:* *string

The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```go
SyncWaitSecs *string
```

- *Type:* *string

Period in seconds(int64 format) between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}

---

### GkeHubFeatureMembershipConfigmanagementHierarchyController <a name="GkeHubFeatureMembershipConfigmanagementHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementHierarchyController {
	Enabled: interface{},
	EnableHierarchicalResourceQuota: interface{},
	EnablePodTreeLabels: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Hierarchy Controller is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>interface{}</code> | Whether hierarchical resource quota is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>interface{}</code> | Whether pod tree labels are enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Hierarchy Controller is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `EnableHierarchicalResourceQuota`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota"></a>

```go
EnableHierarchicalResourceQuota interface{}
```

- *Type:* interface{}

Whether hierarchical resource quota is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enable_hierarchical_resource_quota GkeHubFeatureMembership#enable_hierarchical_resource_quota}

---

##### `EnablePodTreeLabels`<sup>Optional</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels"></a>

```go
EnablePodTreeLabels interface{}
```

- *Type:* interface{}

Whether pod tree labels are enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enable_pod_tree_labels GkeHubFeatureMembership#enable_pod_tree_labels}

---

### GkeHubFeatureMembershipConfigmanagementPolicyController <a name="GkeHubFeatureMembershipConfigmanagementPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementPolicyController {
	AuditIntervalSeconds: *string,
	Enabled: interface{},
	ExemptableNamespaces: *[]*string,
	LogDeniesEnabled: interface{},
	Monitoring: github.com/cdktf/cdktf-provider-google-go/google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring,
	MutationEnabled: interface{},
	ReferentialRulesEnabled: interface{},
	TemplateLibraryInstalled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>*string</code> | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>*[]*string</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>interface{}</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled">MutationEnabled</a></code> | <code>interface{}</code> | Enable or disable mutation in policy controller. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>interface{}</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>interface{}</code> | Installs the default template library along with Policy Controller. |

---

##### `AuditIntervalSeconds`<sup>Optional</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds"></a>

```go
AuditIntervalSeconds *string
```

- *Type:* *string

Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `ExemptableNamespaces`<sup>Optional</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces"></a>

```go
ExemptableNamespaces *[]*string
```

- *Type:* *[]*string

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}

---

##### `LogDeniesEnabled`<sup>Optional</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled"></a>

```go
LogDeniesEnabled interface{}
```

- *Type:* interface{}

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring"></a>

```go
Monitoring GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}

---

##### `MutationEnabled`<sup>Optional</sup> <a name="MutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled"></a>

```go
MutationEnabled interface{}
```

- *Type:* interface{}

Enable or disable mutation in policy controller.

If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}

---

##### `ReferentialRulesEnabled`<sup>Optional</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled"></a>

```go
ReferentialRulesEnabled interface{}
```

- *Type:* interface{}

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}

---

##### `TemplateLibraryInstalled`<sup>Optional</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled"></a>

```go
TemplateLibraryInstalled interface{}
```

- *Type:* interface{}

Installs the default template library along with Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#template_library_installed GkeHubFeatureMembership#template_library_installed}

---

### GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring {
	Backends: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends">Backends</a></code> | <code>*[]*string</code> | Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. |

---

##### `Backends`<sup>Optional</sup> <a name="Backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends"></a>

```go
Backends *[]*string
```

- *Type:* *[]*string

Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}

---

### GkeHubFeatureMembershipMesh <a name="GkeHubFeatureMembershipMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipMesh {
	ControlPlane: *string,
	Management: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.controlPlane">ControlPlane</a></code> | <code>*string</code> | **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.management">Management</a></code> | <code>*string</code> | Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL. |

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.controlPlane"></a>

```go
ControlPlane *string
```

- *Type:* *string

**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#control_plane GkeHubFeatureMembership#control_plane}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.management"></a>

```go
Management *string
```

- *Type:* *string

Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}

---

### GkeHubFeatureMembershipTimeouts <a name="GkeHubFeatureMembershipTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

&gkehubfeaturemembership.GkeHubFeatureMembershipTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference <a name="GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementBinauthz
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">ResetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">ResetSyncBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev">ResetSyncRev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```go
func ResetGcpServiceAccountEmail()
```

##### `ResetHttpsProxy` <a name="ResetHttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```go
func ResetHttpsProxy()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```go
func ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType"></a>

```go
func ResetSecretType()
```

##### `ResetSyncBranch` <a name="ResetSyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```go
func ResetSyncBranch()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```go
func ResetSyncRepo()
```

##### `ResetSyncRev` <a name="ResetSyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```go
func ResetSyncRev()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```go
func ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">HttpsProxyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">SyncBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">SyncRevInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">HttpsProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir">PolicyDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch">SyncBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev">SyncRev</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```go
func GcpServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `HttpsProxyInput`<sup>Optional</sup> <a name="HttpsProxyInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```go
func HttpsProxyInput() *string
```

- *Type:* *string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```go
func PolicyDirInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `SyncBranchInput`<sup>Optional</sup> <a name="SyncBranchInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```go
func SyncBranchInput() *string
```

- *Type:* *string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```go
func SyncRepoInput() *string
```

- *Type:* *string

---

##### `SyncRevInput`<sup>Optional</sup> <a name="SyncRevInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```go
func SyncRevInput() *string
```

- *Type:* *string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```go
func SyncWaitSecsInput() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```go
func GcpServiceAccountEmail() *string
```

- *Type:* *string

---

##### `HttpsProxy`<sup>Required</sup> <a name="HttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```go
func HttpsProxy() *string
```

- *Type:* *string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```go
func PolicyDir() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `SyncBranch`<sup>Required</sup> <a name="SyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```go
func SyncBranch() *string
```

- *Type:* *string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```go
func SyncRepo() *string
```

- *Type:* *string

---

##### `SyncRev`<sup>Required</sup> <a name="SyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```go
func SyncRev() *string
```

- *Type:* *string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```go
func SyncWaitSecs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```go
func ResetGcpServiceAccountEmail()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```go
func ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType"></a>

```go
func ResetSecretType()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```go
func ResetSyncRepo()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```go
func ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir">PolicyDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```go
func GcpServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```go
func PolicyDirInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```go
func SyncRepoInput() *string
```

- *Type:* *string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```go
func SyncWaitSecsInput() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```go
func GcpServiceAccountEmail() *string
```

- *Type:* *string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```go
func PolicyDir() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```go
func SyncRepo() *string
```

- *Type:* *string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```go
func SyncWaitSecs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit">PutGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci">PutOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit">ResetGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci">ResetOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift">ResetPreventDrift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGit` <a name="PutGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit"></a>

```go
func PutGit(value GkeHubFeatureMembershipConfigmanagementConfigSyncGit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `PutOci` <a name="PutOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci"></a>

```go
func PutOci(value GkeHubFeatureMembershipConfigmanagementConfigSyncOci)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `ResetGit` <a name="ResetGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit"></a>

```go
func ResetGit()
```

##### `ResetOci` <a name="ResetOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci"></a>

```go
func ResetOci()
```

##### `ResetPreventDrift` <a name="ResetPreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift"></a>

```go
func ResetPreventDrift()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```go
func ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput">GitInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput">OciInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput">PreventDriftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift">PreventDrift</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git"></a>

```go
func Git() GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a>

---

##### `Oci`<sup>Required</sup> <a name="Oci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci"></a>

```go
func Oci() GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a>

---

##### `GitInput`<sup>Optional</sup> <a name="GitInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```go
func GitInput() GkeHubFeatureMembershipConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `OciInput`<sup>Optional</sup> <a name="OciInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```go
func OciInput() GkeHubFeatureMembershipConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `PreventDriftInput`<sup>Optional</sup> <a name="PreventDriftInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput"></a>

```go
func PreventDriftInput() interface{}
```

- *Type:* interface{}

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```go
func SourceFormatInput() *string
```

- *Type:* *string

---

##### `PreventDrift`<sup>Required</sup> <a name="PreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift"></a>

```go
func PreventDrift() interface{}
```

- *Type:* interface{}

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---


### GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference <a name="GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota">ResetEnableHierarchicalResourceQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels">ResetEnablePodTreeLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnableHierarchicalResourceQuota` <a name="ResetEnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota"></a>

```go
func ResetEnableHierarchicalResourceQuota()
```

##### `ResetEnablePodTreeLabels` <a name="ResetEnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels"></a>

```go
func ResetEnablePodTreeLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput">EnableHierarchicalResourceQuotaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput">EnablePodTreeLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHierarchicalResourceQuotaInput`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuotaInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput"></a>

```go
func EnableHierarchicalResourceQuotaInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePodTreeLabelsInput`<sup>Optional</sup> <a name="EnablePodTreeLabelsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput"></a>

```go
func EnablePodTreeLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnableHierarchicalResourceQuota`<sup>Required</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota"></a>

```go
func EnableHierarchicalResourceQuota() interface{}
```

- *Type:* interface{}

---

##### `EnablePodTreeLabels`<sup>Required</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels"></a>

```go
func EnablePodTreeLabels() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementHierarchyController
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---


### GkeHubFeatureMembershipConfigmanagementOutputReference <a name="GkeHubFeatureMembershipConfigmanagementOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz">PutBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync">PutConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController">PutHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController">PutPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz">ResetBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync">ResetConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController">ResetHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController">ResetPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBinauthz` <a name="PutBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz"></a>

```go
func PutBinauthz(value GkeHubFeatureMembershipConfigmanagementBinauthz)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `PutConfigSync` <a name="PutConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync"></a>

```go
func PutConfigSync(value GkeHubFeatureMembershipConfigmanagementConfigSync)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `PutHierarchyController` <a name="PutHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController"></a>

```go
func PutHierarchyController(value GkeHubFeatureMembershipConfigmanagementHierarchyController)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PutPolicyController` <a name="PutPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController"></a>

```go
func PutPolicyController(value GkeHubFeatureMembershipConfigmanagementPolicyController)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `ResetBinauthz` <a name="ResetBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz"></a>

```go
func ResetBinauthz()
```

##### `ResetConfigSync` <a name="ResetConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync"></a>

```go
func ResetConfigSync()
```

##### `ResetHierarchyController` <a name="ResetHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController"></a>

```go
func ResetHierarchyController()
```

##### `ResetPolicyController` <a name="ResetPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController"></a>

```go
func ResetPolicyController()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput">BinauthzInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput">ConfigSyncInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput">HierarchyControllerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput">PolicyControllerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Binauthz`<sup>Required</sup> <a name="Binauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz"></a>

```go
func Binauthz() GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a>

---

##### `ConfigSync`<sup>Required</sup> <a name="ConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync"></a>

```go
func ConfigSync() GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a>

---

##### `HierarchyController`<sup>Required</sup> <a name="HierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController"></a>

```go
func HierarchyController() GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a>

---

##### `PolicyController`<sup>Required</sup> <a name="PolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController"></a>

```go
func PolicyController() GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a>

---

##### `BinauthzInput`<sup>Optional</sup> <a name="BinauthzInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput"></a>

```go
func BinauthzInput() GkeHubFeatureMembershipConfigmanagementBinauthz
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `ConfigSyncInput`<sup>Optional</sup> <a name="ConfigSyncInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput"></a>

```go
func ConfigSyncInput() GkeHubFeatureMembershipConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `HierarchyControllerInput`<sup>Optional</sup> <a name="HierarchyControllerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput"></a>

```go
func HierarchyControllerInput() GkeHubFeatureMembershipConfigmanagementHierarchyController
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PolicyControllerInput`<sup>Optional</sup> <a name="PolicyControllerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput"></a>

```go
func PolicyControllerInput() GkeHubFeatureMembershipConfigmanagementPolicyController
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---


### GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends">ResetBackends</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackends` <a name="ResetBackends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends"></a>

```go
func ResetBackends()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput">BackendsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends">Backends</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendsInput`<sup>Optional</sup> <a name="BackendsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput"></a>

```go
func BackendsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends"></a>

```go
func Backends() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---


### GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds">ResetAuditIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces">ResetExemptableNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled">ResetLogDeniesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled">ResetMutationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled">ResetReferentialRulesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled">ResetTemplateLibraryInstalled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring"></a>

```go
func PutMonitoring(value GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `ResetAuditIntervalSeconds` <a name="ResetAuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds"></a>

```go
func ResetAuditIntervalSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExemptableNamespaces` <a name="ResetExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces"></a>

```go
func ResetExemptableNamespaces()
```

##### `ResetLogDeniesEnabled` <a name="ResetLogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled"></a>

```go
func ResetLogDeniesEnabled()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetMutationEnabled` <a name="ResetMutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled"></a>

```go
func ResetMutationEnabled()
```

##### `ResetReferentialRulesEnabled` <a name="ResetReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled"></a>

```go
func ResetReferentialRulesEnabled()
```

##### `ResetTemplateLibraryInstalled` <a name="ResetTemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled"></a>

```go
func ResetTemplateLibraryInstalled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput">AuditIntervalSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput">ExemptableNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput">LogDeniesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput">MutationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput">ReferentialRulesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput">TemplateLibraryInstalledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled">MutationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring"></a>

```go
func Monitoring() GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a>

---

##### `AuditIntervalSecondsInput`<sup>Optional</sup> <a name="AuditIntervalSecondsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput"></a>

```go
func AuditIntervalSecondsInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExemptableNamespacesInput`<sup>Optional</sup> <a name="ExemptableNamespacesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput"></a>

```go
func ExemptableNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogDeniesEnabledInput`<sup>Optional</sup> <a name="LogDeniesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput"></a>

```go
func LogDeniesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput"></a>

```go
func MonitoringInput() GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `MutationEnabledInput`<sup>Optional</sup> <a name="MutationEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput"></a>

```go
func MutationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReferentialRulesEnabledInput`<sup>Optional</sup> <a name="ReferentialRulesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput"></a>

```go
func ReferentialRulesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateLibraryInstalledInput`<sup>Optional</sup> <a name="TemplateLibraryInstalledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput"></a>

```go
func TemplateLibraryInstalledInput() interface{}
```

- *Type:* interface{}

---

##### `AuditIntervalSeconds`<sup>Required</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds"></a>

```go
func AuditIntervalSeconds() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExemptableNamespaces`<sup>Required</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces"></a>

```go
func ExemptableNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `LogDeniesEnabled`<sup>Required</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled"></a>

```go
func LogDeniesEnabled() interface{}
```

- *Type:* interface{}

---

##### `MutationEnabled`<sup>Required</sup> <a name="MutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled"></a>

```go
func MutationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReferentialRulesEnabled`<sup>Required</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled"></a>

```go
func ReferentialRulesEnabled() interface{}
```

- *Type:* interface{}

---

##### `TemplateLibraryInstalled`<sup>Required</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled"></a>

```go
func TemplateLibraryInstalled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipConfigmanagementPolicyController
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---


### GkeHubFeatureMembershipMeshOutputReference <a name="GkeHubFeatureMembershipMeshOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipMeshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipMeshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetManagement">ResetManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetControlPlane"></a>

```go
func ResetControlPlane()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetManagement"></a>

```go
func ResetManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput">ControlPlaneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.managementInput">ManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlane">ControlPlane</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.management">Management</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput"></a>

```go
func ControlPlaneInput() *string
```

- *Type:* *string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.managementInput"></a>

```go
func ManagementInput() *string
```

- *Type:* *string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlane"></a>

```go
func ControlPlane() *string
```

- *Type:* *string

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.management"></a>

```go
func Management() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureMembershipMesh
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---


### GkeHubFeatureMembershipTimeoutsOutputReference <a name="GkeHubFeatureMembershipTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkehubfeaturemembership"

gkehubfeaturemembership.NewGkeHubFeatureMembershipTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureMembershipTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



