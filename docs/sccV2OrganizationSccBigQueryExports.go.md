# `sccV2OrganizationSccBigQueryExports` Submodule <a name="`sccV2OrganizationSccBigQueryExports` Submodule" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSccBigQueryExports <a name="SccV2OrganizationSccBigQueryExports" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports google_scc_v2_organization_scc_big_query_exports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

sccv2organizationsccbigqueryexports.NewSccV2OrganizationSccBigQueryExports(scope Construct, id *string, config SccV2OrganizationSccBigQueryExportsConfig) SccV2OrganizationSccBigQueryExports
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig">SccV2OrganizationSccBigQueryExportsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig">SccV2OrganizationSccBigQueryExportsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.putTimeouts"></a>

```go
func PutTimeouts(value SccV2OrganizationSccBigQueryExportsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationSccBigQueryExports resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

sccv2organizationsccbigqueryexports.SccV2OrganizationSccBigQueryExports_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

sccv2organizationsccbigqueryexports.SccV2OrganizationSccBigQueryExports_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

sccv2organizationsccbigqueryexports.SccV2OrganizationSccBigQueryExports_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

sccv2organizationsccbigqueryexports.SccV2OrganizationSccBigQueryExports_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SccV2OrganizationSccBigQueryExports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccV2OrganizationSccBigQueryExports to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccV2OrganizationSccBigQueryExports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSccBigQueryExports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.mostRecentEditor">MostRecentEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference">SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportId">BigQueryExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.mostRecentEditor"></a>

```go
func MostRecentEditor() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeouts"></a>

```go
func Timeouts() SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference">SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportIdInput"></a>

```go
func BigQueryExportIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportId"></a>

```go
func BigQueryExportId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSccBigQueryExportsConfig <a name="SccV2OrganizationSccBigQueryExportsConfig" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

&sccv2organizationsccbigqueryexports.SccV2OrganizationSccBigQueryExportsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BigQueryExportId: *string,
	Organization: *string,
	Dataset: *string,
	Description: *string,
	Filter: *string,
	Id: *string,
	Location: *string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>*string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dataset">Dataset</a></code> | <code>*string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.description">Description</a></code> | <code>*string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.filter">Filter</a></code> | <code>*string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#id SccV2OrganizationSccBigQueryExports#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.location">Location</a></code> | <code>*string</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.bigQueryExportId"></a>

```go
BigQueryExportId *string
```

- *Type:* *string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#big_query_export_id SccV2OrganizationSccBigQueryExports#big_query_export_id}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#organization SccV2OrganizationSccBigQueryExports#organization}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#dataset SccV2OrganizationSccBigQueryExports#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#description SccV2OrganizationSccBigQueryExports#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#filter SccV2OrganizationSccBigQueryExports#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#id SccV2OrganizationSccBigQueryExports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#location SccV2OrganizationSccBigQueryExports#location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'.

This field is provided in responses, and is ignored when provided in create requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#name SccV2OrganizationSccBigQueryExports#name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.timeouts"></a>

```go
Timeouts SccV2OrganizationSccBigQueryExportsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#timeouts SccV2OrganizationSccBigQueryExports#timeouts}

---

### SccV2OrganizationSccBigQueryExportsTimeouts <a name="SccV2OrganizationSccBigQueryExportsTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

&sccv2organizationsccbigqueryexports.SccV2OrganizationSccBigQueryExportsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#create SccV2OrganizationSccBigQueryExports#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#delete SccV2OrganizationSccBigQueryExports#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#update SccV2OrganizationSccBigQueryExports#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#create SccV2OrganizationSccBigQueryExports#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#delete SccV2OrganizationSccBigQueryExports#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/scc_v2_organization_scc_big_query_exports#update SccV2OrganizationSccBigQueryExports#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference <a name="SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccv2organizationsccbigqueryexports"

sccv2organizationsccbigqueryexports.NewSccV2OrganizationSccBigQueryExportsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



