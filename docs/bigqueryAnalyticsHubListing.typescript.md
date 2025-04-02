# `bigqueryAnalyticsHubListing` Submodule <a name="`bigqueryAnalyticsHubListing` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubListing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListing <a name="BigqueryAnalyticsHubListing" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing(scope: Construct, id: string, config: BigqueryAnalyticsHubListingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig">BigqueryAnalyticsHubListingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig">BigqueryAnalyticsHubListingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset">putBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider">putDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher">putPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig">putRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDataProvider">resetDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRequestAccess">resetRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRestrictedExportConfig">resetRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryDataset` <a name="putBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset"></a>

```typescript
public putBigqueryDataset(value: BigqueryAnalyticsHubListingBigqueryDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `putDataProvider` <a name="putDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider"></a>

```typescript
public putDataProvider(value: BigqueryAnalyticsHubListingDataProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---

##### `putPublisher` <a name="putPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher"></a>

```typescript
public putPublisher(value: BigqueryAnalyticsHubListingPublisher): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---

##### `putRestrictedExportConfig` <a name="putRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig"></a>

```typescript
public putRestrictedExportConfig(value: BigqueryAnalyticsHubListingRestrictedExportConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryAnalyticsHubListingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetCategories"></a>

```typescript
public resetCategories(): void
```

##### `resetDataProvider` <a name="resetDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDataProvider"></a>

```typescript
public resetDataProvider(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDocumentation"></a>

```typescript
public resetDocumentation(): void
```

##### `resetIcon` <a name="resetIcon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetIcon"></a>

```typescript
public resetIcon(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPrimaryContact"></a>

```typescript
public resetPrimaryContact(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPublisher"></a>

```typescript
public resetPublisher(): void
```

##### `resetRequestAccess` <a name="resetRequestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRequestAccess"></a>

```typescript
public resetRequestAccess(): void
```

##### `resetRestrictedExportConfig` <a name="resetRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRestrictedExportConfig"></a>

```typescript
public resetRestrictedExportConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryAnalyticsHubListing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryAnalyticsHubListing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference">BigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProvider">dataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference">BigqueryAnalyticsHubListingDataProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisher">publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference">BigqueryAnalyticsHubListingPublisherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfig">restrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference">BigqueryAnalyticsHubListingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDatasetInput">bigqueryDatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categoriesInput">categoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProviderInput">dataProviderInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentationInput">documentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.iconInput">iconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContactInput">primaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisherInput">publisherInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccessInput">requestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfigInput">restrictedExportConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categories">categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentation">documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.icon">icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContact">primaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccess">requestAccess</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryDataset`<sup>Required</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDataset"></a>

```typescript
public readonly bigqueryDataset: BigqueryAnalyticsHubListingBigqueryDatasetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference">BigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a>

---

##### `dataProvider`<sup>Required</sup> <a name="dataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProvider"></a>

```typescript
public readonly dataProvider: BigqueryAnalyticsHubListingDataProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference">BigqueryAnalyticsHubListingDataProviderOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisher"></a>

```typescript
public readonly publisher: BigqueryAnalyticsHubListingPublisherOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference">BigqueryAnalyticsHubListingPublisherOutputReference</a>

---

##### `restrictedExportConfig`<sup>Required</sup> <a name="restrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfig"></a>

```typescript
public readonly restrictedExportConfig: BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryAnalyticsHubListingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference">BigqueryAnalyticsHubListingTimeoutsOutputReference</a>

---

##### `bigqueryDatasetInput`<sup>Optional</sup> <a name="bigqueryDatasetInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDatasetInput"></a>

```typescript
public readonly bigqueryDatasetInput: BigqueryAnalyticsHubListingBigqueryDataset;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categoriesInput"></a>

```typescript
public readonly categoriesInput: string[];
```

- *Type:* string[]

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `dataProviderInput`<sup>Optional</sup> <a name="dataProviderInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProviderInput"></a>

```typescript
public readonly dataProviderInput: BigqueryAnalyticsHubListingDataProvider;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentationInput"></a>

```typescript
public readonly documentationInput: string;
```

- *Type:* string

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.iconInput"></a>

```typescript
public readonly iconInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContactInput"></a>

```typescript
public readonly primaryContactInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisherInput"></a>

```typescript
public readonly publisherInput: BigqueryAnalyticsHubListingPublisher;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---

##### `requestAccessInput`<sup>Optional</sup> <a name="requestAccessInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccessInput"></a>

```typescript
public readonly requestAccessInput: string;
```

- *Type:* string

---

##### `restrictedExportConfigInput`<sup>Optional</sup> <a name="restrictedExportConfigInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfigInput"></a>

```typescript
public readonly restrictedExportConfigInput: BigqueryAnalyticsHubListingRestrictedExportConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryAnalyticsHubListingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* string

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requestAccess`<sup>Required</sup> <a name="requestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccess"></a>

```typescript
public readonly requestAccess: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingBigqueryDataset <a name="BigqueryAnalyticsHubListingBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingBigqueryDataset: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.dataset">dataset</a></code> | <code>string</code> | Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources">selectedResources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]</code> | selected_resources block. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#dataset BigqueryAnalyticsHubListing#dataset}

---

##### `selectedResources`<sup>Optional</sup> <a name="selectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources"></a>

```typescript
public readonly selectedResources: IResolvable | BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]

selected_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#selected_resources BigqueryAnalyticsHubListing#selected_resources}

---

### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingBigqueryDatasetSelectedResources: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table">table</a></code> | <code>string</code> | Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table". |

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#table BigqueryAnalyticsHubListing#table}

---

### BigqueryAnalyticsHubListingConfig <a name="BigqueryAnalyticsHubListingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingConfig: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.listingId">listingId</a></code> | <code>string</code> | The ID of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.location">location</a></code> | <code>string</code> | The name of the location this data exchange listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.categories">categories</a></code> | <code>string[]</code> | Categories of the listing. Up to two categories are allowed. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataProvider">dataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | data_provider block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.description">description</a></code> | <code>string</code> | Short description of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.documentation">documentation</a></code> | <code>string</code> | Documentation describing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.icon">icon</a></code> | <code>string</code> | Base64 encoded image representing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.primaryContact">primaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.publisher">publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | publisher block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.requestAccess">requestAccess</a></code> | <code>string</code> | Email or URL of the request access of the listing. Subscribers can use this reference to request access. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.restrictedExportConfig">restrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | restricted_export_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryDataset`<sup>Required</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.bigqueryDataset"></a>

```typescript
public readonly bigqueryDataset: BigqueryAnalyticsHubListingBigqueryDataset;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#bigquery_dataset BigqueryAnalyticsHubListing#bigquery_dataset}

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#data_exchange_id BigqueryAnalyticsHubListing#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of the listing.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#display_name BigqueryAnalyticsHubListing#display_name}

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#listing_id BigqueryAnalyticsHubListing#listing_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this data exchange listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#location BigqueryAnalyticsHubListing#location}

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

Categories of the listing. Up to two categories are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#categories BigqueryAnalyticsHubListing#categories}

---

##### `dataProvider`<sup>Optional</sup> <a name="dataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataProvider"></a>

```typescript
public readonly dataProvider: BigqueryAnalyticsHubListingDataProvider;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

data_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#data_provider BigqueryAnalyticsHubListing#data_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Short description of the listing.

The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#description BigqueryAnalyticsHubListing#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* string

Documentation describing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#documentation BigqueryAnalyticsHubListing#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

Base64 encoded image representing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#icon BigqueryAnalyticsHubListing#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

Email or URL of the primary point of contact of the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.publisher"></a>

```typescript
public readonly publisher: BigqueryAnalyticsHubListingPublisher;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

publisher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#publisher BigqueryAnalyticsHubListing#publisher}

---

##### `requestAccess`<sup>Optional</sup> <a name="requestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.requestAccess"></a>

```typescript
public readonly requestAccess: string;
```

- *Type:* string

Email or URL of the request access of the listing. Subscribers can use this reference to request access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#request_access BigqueryAnalyticsHubListing#request_access}

---

##### `restrictedExportConfig`<sup>Optional</sup> <a name="restrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.restrictedExportConfig"></a>

```typescript
public readonly restrictedExportConfig: BigqueryAnalyticsHubListingRestrictedExportConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

restricted_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#restricted_export_config BigqueryAnalyticsHubListing#restricted_export_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryAnalyticsHubListingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#timeouts BigqueryAnalyticsHubListing#timeouts}

---

### BigqueryAnalyticsHubListingDataProvider <a name="BigqueryAnalyticsHubListingDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingDataProvider: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.name">name</a></code> | <code>string</code> | Name of the data provider. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.primaryContact">primaryContact</a></code> | <code>string</code> | Email or URL of the data provider. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

Email or URL of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

### BigqueryAnalyticsHubListingPublisher <a name="BigqueryAnalyticsHubListingPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingPublisher: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.name">name</a></code> | <code>string</code> | Name of the listing publisher. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.primaryContact">primaryContact</a></code> | <code>string</code> | Email or URL of the listing publisher. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

Email or URL of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

### BigqueryAnalyticsHubListingRestrictedExportConfig <a name="BigqueryAnalyticsHubListingRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingRestrictedExportConfig: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enable restricted export. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult">restrictQueryResult</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, restrict export of query result derived from restricted linked dataset table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enable restricted export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#enabled BigqueryAnalyticsHubListing#enabled}

---

##### `restrictQueryResult`<sup>Optional</sup> <a name="restrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult"></a>

```typescript
public readonly restrictQueryResult: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, restrict export of query result derived from restricted linked dataset table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#restrict_query_result BigqueryAnalyticsHubListing#restrict_query_result}

---

### BigqueryAnalyticsHubListingTimeouts <a name="BigqueryAnalyticsHubListingTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

const bigqueryAnalyticsHubListingTimeouts: bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingBigqueryDatasetOutputReference <a name="BigqueryAnalyticsHubListingBigqueryDatasetOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources">putSelectedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources">resetSelectedResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectedResources` <a name="putSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources"></a>

```typescript
public putSelectedResources(value: IResolvable | BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]

---

##### `resetSelectedResources` <a name="resetSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources"></a>

```typescript
public resetSelectedResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources">selectedResources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput">selectedResourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selectedResources`<sup>Required</sup> <a name="selectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources"></a>

```typescript
public readonly selectedResources: BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `selectedResourcesInput`<sup>Optional</sup> <a name="selectedResourcesInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput"></a>

```typescript
public readonly selectedResourcesInput: IResolvable | BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingBigqueryDataset;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---


### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get"></a>

```typescript
public get(index: number): BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>[]

---


### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTable` <a name="resetTable" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>

---


### BigqueryAnalyticsHubListingDataProviderOutputReference <a name="BigqueryAnalyticsHubListingDataProviderOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact"></a>

```typescript
public resetPrimaryContact(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput">primaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact">primaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput"></a>

```typescript
public readonly primaryContactInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingDataProvider;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---


### BigqueryAnalyticsHubListingPublisherOutputReference <a name="BigqueryAnalyticsHubListingPublisherOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact"></a>

```typescript
public resetPrimaryContact(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput">primaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact">primaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput"></a>

```typescript
public readonly primaryContactInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingPublisher;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---


### BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference <a name="BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult">resetRestrictQueryResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRestrictQueryResult` <a name="resetRestrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult"></a>

```typescript
public resetRestrictQueryResult(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess">restrictDirectTableAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput">restrictQueryResultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult">restrictQueryResult</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restrictDirectTableAccess`<sup>Required</sup> <a name="restrictDirectTableAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess"></a>

```typescript
public readonly restrictDirectTableAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictQueryResultInput`<sup>Optional</sup> <a name="restrictQueryResultInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput"></a>

```typescript
public readonly restrictQueryResultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictQueryResult`<sup>Required</sup> <a name="restrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult"></a>

```typescript
public readonly restrictQueryResult: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubListingRestrictedExportConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---


### BigqueryAnalyticsHubListingTimeoutsOutputReference <a name="BigqueryAnalyticsHubListingTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubListing } from '@cdktf/provider-google'

new bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryAnalyticsHubListingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---



