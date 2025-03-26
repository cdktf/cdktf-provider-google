# `bigqueryAnalyticsHubListing` Submodule <a name="`bigqueryAnalyticsHubListing` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubListing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListing <a name="BigqueryAnalyticsHubListing" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListing(scope Construct, id *string, config BigqueryAnalyticsHubListingConfig) BigqueryAnalyticsHubListing
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig">BigqueryAnalyticsHubListingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig">BigqueryAnalyticsHubListingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset">PutBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider">PutDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher">PutPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig">PutRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDataProvider">ResetDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetIcon">ResetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRequestAccess">ResetRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRestrictedExportConfig">ResetRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryDataset` <a name="PutBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset"></a>

```go
func PutBigqueryDataset(value BigqueryAnalyticsHubListingBigqueryDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `PutDataProvider` <a name="PutDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider"></a>

```go
func PutDataProvider(value BigqueryAnalyticsHubListingDataProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---

##### `PutPublisher` <a name="PutPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher"></a>

```go
func PutPublisher(value BigqueryAnalyticsHubListingPublisher)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---

##### `PutRestrictedExportConfig` <a name="PutRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig"></a>

```go
func PutRestrictedExportConfig(value BigqueryAnalyticsHubListingRestrictedExportConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryAnalyticsHubListingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetDataProvider` <a name="ResetDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDataProvider"></a>

```go
func ResetDataProvider()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDocumentation"></a>

```go
func ResetDocumentation()
```

##### `ResetIcon` <a name="ResetIcon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetIcon"></a>

```go
func ResetIcon()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetId"></a>

```go
func ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPrimaryContact"></a>

```go
func ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPublisher"></a>

```go
func ResetPublisher()
```

##### `ResetRequestAccess` <a name="ResetRequestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRequestAccess"></a>

```go
func ResetRequestAccess()
```

##### `ResetRestrictedExportConfig` <a name="ResetRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRestrictedExportConfig"></a>

```go
func ResetRestrictedExportConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.BigqueryAnalyticsHubListing_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.BigqueryAnalyticsHubListing_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.BigqueryAnalyticsHubListing_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.BigqueryAnalyticsHubListing_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryAnalyticsHubListing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryAnalyticsHubListing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDataset">BigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference">BigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProvider">DataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference">BigqueryAnalyticsHubListingDataProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisher">Publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference">BigqueryAnalyticsHubListingPublisherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfig">RestrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference">BigqueryAnalyticsHubListingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDatasetInput">BigqueryDatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProviderInput">DataProviderInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentationInput">DocumentationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.iconInput">IconInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContactInput">PrimaryContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisherInput">PublisherInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccessInput">RequestAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfigInput">RestrictedExportConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentation">Documentation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.icon">Icon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccess">RequestAccess</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryDataset`<sup>Required</sup> <a name="BigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDataset"></a>

```go
func BigqueryDataset() BigqueryAnalyticsHubListingBigqueryDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference">BigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a>

---

##### `DataProvider`<sup>Required</sup> <a name="DataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProvider"></a>

```go
func DataProvider() BigqueryAnalyticsHubListingDataProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference">BigqueryAnalyticsHubListingDataProviderOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisher"></a>

```go
func Publisher() BigqueryAnalyticsHubListingPublisherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference">BigqueryAnalyticsHubListingPublisherOutputReference</a>

---

##### `RestrictedExportConfig`<sup>Required</sup> <a name="RestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfig"></a>

```go
func RestrictedExportConfig() BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeouts"></a>

```go
func Timeouts() BigqueryAnalyticsHubListingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference">BigqueryAnalyticsHubListingTimeoutsOutputReference</a>

---

##### `BigqueryDatasetInput`<sup>Optional</sup> <a name="BigqueryDatasetInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDatasetInput"></a>

```go
func BigqueryDatasetInput() BigqueryAnalyticsHubListingBigqueryDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `DataProviderInput`<sup>Optional</sup> <a name="DataProviderInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProviderInput"></a>

```go
func DataProviderInput() BigqueryAnalyticsHubListingDataProvider
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentationInput"></a>

```go
func DocumentationInput() *string
```

- *Type:* *string

---

##### `IconInput`<sup>Optional</sup> <a name="IconInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.iconInput"></a>

```go
func IconInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContactInput"></a>

```go
func PrimaryContactInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisherInput"></a>

```go
func PublisherInput() BigqueryAnalyticsHubListingPublisher
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---

##### `RequestAccessInput`<sup>Optional</sup> <a name="RequestAccessInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccessInput"></a>

```go
func RequestAccessInput() *string
```

- *Type:* *string

---

##### `RestrictedExportConfigInput`<sup>Optional</sup> <a name="RestrictedExportConfigInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfigInput"></a>

```go
func RestrictedExportConfigInput() BigqueryAnalyticsHubListingRestrictedExportConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentation"></a>

```go
func Documentation() *string
```

- *Type:* *string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.icon"></a>

```go
func Icon() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContact"></a>

```go
func PrimaryContact() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequestAccess`<sup>Required</sup> <a name="RequestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccess"></a>

```go
func RequestAccess() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingBigqueryDataset <a name="BigqueryAnalyticsHubListingBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingBigqueryDataset {
	Dataset: *string,
	SelectedResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.dataset">Dataset</a></code> | <code>*string</code> | Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources">SelectedResources</a></code> | <code>interface{}</code> | selected_resources block. |

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#dataset BigqueryAnalyticsHubListing#dataset}

---

##### `SelectedResources`<sup>Optional</sup> <a name="SelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources"></a>

```go
SelectedResources interface{}
```

- *Type:* interface{}

selected_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#selected_resources BigqueryAnalyticsHubListing#selected_resources}

---

### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources {
	Table: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table">Table</a></code> | <code>*string</code> | Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table". |

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table"></a>

```go
Table *string
```

- *Type:* *string

Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#table BigqueryAnalyticsHubListing#table}

---

### BigqueryAnalyticsHubListingConfig <a name="BigqueryAnalyticsHubListingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BigqueryDataset: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset,
	DataExchangeId: *string,
	DisplayName: *string,
	ListingId: *string,
	Location: *string,
	Categories: *[]*string,
	DataProvider: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider,
	Description: *string,
	Documentation: *string,
	Icon: *string,
	Id: *string,
	PrimaryContact: *string,
	Project: *string,
	Publisher: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher,
	RequestAccess: *string,
	RestrictedExportConfig: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.bigqueryDataset">BigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable display name of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.listingId">ListingId</a></code> | <code>*string</code> | The ID of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this data exchange listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.categories">Categories</a></code> | <code>*[]*string</code> | Categories of the listing. Up to two categories are allowed. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataProvider">DataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | data_provider block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.description">Description</a></code> | <code>*string</code> | Short description of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.documentation">Documentation</a></code> | <code>*string</code> | Documentation describing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.icon">Icon</a></code> | <code>*string</code> | Base64 encoded image representing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | Email or URL of the primary point of contact of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.publisher">Publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | publisher block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.requestAccess">RequestAccess</a></code> | <code>*string</code> | Email or URL of the request access of the listing. Subscribers can use this reference to request access. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.restrictedExportConfig">RestrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | restricted_export_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryDataset`<sup>Required</sup> <a name="BigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.bigqueryDataset"></a>

```go
BigqueryDataset BigqueryAnalyticsHubListingBigqueryDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#bigquery_dataset BigqueryAnalyticsHubListing#bigquery_dataset}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#data_exchange_id BigqueryAnalyticsHubListing#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable display name of the listing.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#display_name BigqueryAnalyticsHubListing#display_name}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#listing_id BigqueryAnalyticsHubListing#listing_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this data exchange listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#location BigqueryAnalyticsHubListing#location}

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Categories of the listing. Up to two categories are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#categories BigqueryAnalyticsHubListing#categories}

---

##### `DataProvider`<sup>Optional</sup> <a name="DataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataProvider"></a>

```go
DataProvider BigqueryAnalyticsHubListingDataProvider
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

data_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#data_provider BigqueryAnalyticsHubListing#data_provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Short description of the listing.

The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#description BigqueryAnalyticsHubListing#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.documentation"></a>

```go
Documentation *string
```

- *Type:* *string

Documentation describing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#documentation BigqueryAnalyticsHubListing#documentation}

---

##### `Icon`<sup>Optional</sup> <a name="Icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.icon"></a>

```go
Icon *string
```

- *Type:* *string

Base64 encoded image representing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#icon BigqueryAnalyticsHubListing#icon}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.primaryContact"></a>

```go
PrimaryContact *string
```

- *Type:* *string

Email or URL of the primary point of contact of the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.publisher"></a>

```go
Publisher BigqueryAnalyticsHubListingPublisher
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

publisher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#publisher BigqueryAnalyticsHubListing#publisher}

---

##### `RequestAccess`<sup>Optional</sup> <a name="RequestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.requestAccess"></a>

```go
RequestAccess *string
```

- *Type:* *string

Email or URL of the request access of the listing. Subscribers can use this reference to request access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#request_access BigqueryAnalyticsHubListing#request_access}

---

##### `RestrictedExportConfig`<sup>Optional</sup> <a name="RestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.restrictedExportConfig"></a>

```go
RestrictedExportConfig BigqueryAnalyticsHubListingRestrictedExportConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

restricted_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#restricted_export_config BigqueryAnalyticsHubListing#restricted_export_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.timeouts"></a>

```go
Timeouts BigqueryAnalyticsHubListingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#timeouts BigqueryAnalyticsHubListing#timeouts}

---

### BigqueryAnalyticsHubListingDataProvider <a name="BigqueryAnalyticsHubListingDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingDataProvider {
	Name: *string,
	PrimaryContact: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.name">Name</a></code> | <code>*string</code> | Name of the data provider. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | Email or URL of the data provider. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.primaryContact"></a>

```go
PrimaryContact *string
```

- *Type:* *string

Email or URL of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

### BigqueryAnalyticsHubListingPublisher <a name="BigqueryAnalyticsHubListingPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingPublisher {
	Name: *string,
	PrimaryContact: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.name">Name</a></code> | <code>*string</code> | Name of the listing publisher. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | Email or URL of the listing publisher. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.primaryContact"></a>

```go
PrimaryContact *string
```

- *Type:* *string

Email or URL of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

### BigqueryAnalyticsHubListingRestrictedExportConfig <a name="BigqueryAnalyticsHubListingRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingRestrictedExportConfig {
	Enabled: interface{},
	RestrictQueryResult: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If true, enable restricted export. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult">RestrictQueryResult</a></code> | <code>interface{}</code> | If true, restrict export of query result derived from restricted linked dataset table. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If true, enable restricted export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#enabled BigqueryAnalyticsHubListing#enabled}

---

##### `RestrictQueryResult`<sup>Optional</sup> <a name="RestrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult"></a>

```go
RestrictQueryResult interface{}
```

- *Type:* interface{}

If true, restrict export of query result derived from restricted linked dataset table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#restrict_query_result BigqueryAnalyticsHubListing#restrict_query_result}

---

### BigqueryAnalyticsHubListingTimeouts <a name="BigqueryAnalyticsHubListingTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

&bigqueryanalyticshublisting.BigqueryAnalyticsHubListingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingBigqueryDatasetOutputReference <a name="BigqueryAnalyticsHubListingBigqueryDatasetOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingBigqueryDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingBigqueryDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources">PutSelectedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources">ResetSelectedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectedResources` <a name="PutSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources"></a>

```go
func PutSelectedResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelectedResources` <a name="ResetSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources"></a>

```go
func ResetSelectedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources">SelectedResources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput">SelectedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelectedResources`<sup>Required</sup> <a name="SelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources"></a>

```go
func SelectedResources() BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `SelectedResourcesInput`<sup>Optional</sup> <a name="SelectedResourcesInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput"></a>

```go
func SelectedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingBigqueryDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---


### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get"></a>

```go
func Get(index *f64) BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable"></a>

```go
func ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryAnalyticsHubListingDataProviderOutputReference <a name="BigqueryAnalyticsHubListingDataProviderOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingDataProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingDataProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact"></a>

```go
func ResetPrimaryContact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput">PrimaryContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput"></a>

```go
func PrimaryContactInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact"></a>

```go
func PrimaryContact() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingDataProvider
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---


### BigqueryAnalyticsHubListingPublisherOutputReference <a name="BigqueryAnalyticsHubListingPublisherOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingPublisherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingPublisherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact"></a>

```go
func ResetPrimaryContact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput">PrimaryContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput"></a>

```go
func PrimaryContactInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact"></a>

```go
func PrimaryContact() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingPublisher
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---


### BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference <a name="BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult">ResetRestrictQueryResult</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRestrictQueryResult` <a name="ResetRestrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult"></a>

```go
func ResetRestrictQueryResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess">RestrictDirectTableAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput">RestrictQueryResultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult">RestrictQueryResult</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestrictDirectTableAccess`<sup>Required</sup> <a name="RestrictDirectTableAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess"></a>

```go
func RestrictDirectTableAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictQueryResultInput`<sup>Optional</sup> <a name="RestrictQueryResultInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput"></a>

```go
func RestrictQueryResultInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RestrictQueryResult`<sup>Required</sup> <a name="RestrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult"></a>

```go
func RestrictQueryResult() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingRestrictedExportConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---


### BigqueryAnalyticsHubListingTimeoutsOutputReference <a name="BigqueryAnalyticsHubListingTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublisting"

bigqueryanalyticshublisting.NewBigqueryAnalyticsHubListingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



