# `storageInsightsReportConfig` Submodule <a name="`storageInsightsReportConfig` Submodule" id="@cdktf/provider-google.storageInsightsReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageInsightsReportConfig <a name="StorageInsightsReportConfig" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config google_storage_insights_report_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfig(scope: Construct, id: string, config: StorageInsightsReportConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig">StorageInsightsReportConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig">StorageInsightsReportConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions">putCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions">putFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions">putObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetFrequencyOptions">resetFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetObjectMetadataReportOptions">resetObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCsvOptions` <a name="putCsvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions"></a>

```typescript
public putCsvOptions(value: StorageInsightsReportConfigCsvOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---

##### `putFrequencyOptions` <a name="putFrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions"></a>

```typescript
public putFrequencyOptions(value: StorageInsightsReportConfigFrequencyOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---

##### `putObjectMetadataReportOptions` <a name="putObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions"></a>

```typescript
public putObjectMetadataReportOptions(value: StorageInsightsReportConfigObjectMetadataReportOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageInsightsReportConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFrequencyOptions` <a name="resetFrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetFrequencyOptions"></a>

```typescript
public resetFrequencyOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectMetadataReportOptions` <a name="resetObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetObjectMetadataReportOptions"></a>

```typescript
public resetObjectMetadataReportOptions(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageInsightsReportConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageInsightsReportConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageInsightsReportConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageInsightsReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageInsightsReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference">StorageInsightsReportConfigCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptions">frequencyOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference">StorageInsightsReportConfigFrequencyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptions">objectMetadataReportOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference">StorageInsightsReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptionsInput">csvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptionsInput">frequencyOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptionsInput">objectMetadataReportOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `csvOptions`<sup>Required</sup> <a name="csvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptions"></a>

```typescript
public readonly csvOptions: StorageInsightsReportConfigCsvOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference">StorageInsightsReportConfigCsvOptionsOutputReference</a>

---

##### `frequencyOptions`<sup>Required</sup> <a name="frequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptions"></a>

```typescript
public readonly frequencyOptions: StorageInsightsReportConfigFrequencyOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference">StorageInsightsReportConfigFrequencyOptionsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectMetadataReportOptions`<sup>Required</sup> <a name="objectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptions"></a>

```typescript
public readonly objectMetadataReportOptions: StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageInsightsReportConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference">StorageInsightsReportConfigTimeoutsOutputReference</a>

---

##### `csvOptionsInput`<sup>Optional</sup> <a name="csvOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptionsInput"></a>

```typescript
public readonly csvOptionsInput: StorageInsightsReportConfigCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `frequencyOptionsInput`<sup>Optional</sup> <a name="frequencyOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptionsInput"></a>

```typescript
public readonly frequencyOptionsInput: StorageInsightsReportConfigFrequencyOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `objectMetadataReportOptionsInput`<sup>Optional</sup> <a name="objectMetadataReportOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptionsInput"></a>

```typescript
public readonly objectMetadataReportOptionsInput: StorageInsightsReportConfigObjectMetadataReportOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageInsightsReportConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageInsightsReportConfigConfig <a name="StorageInsightsReportConfigConfig" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigConfig: storageInsightsReportConfig.StorageInsightsReportConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.frequencyOptions">frequencyOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | frequency_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.objectMetadataReportOptions">objectMetadataReportOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | object_metadata_report_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `csvOptions`<sup>Required</sup> <a name="csvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.csvOptions"></a>

```typescript
public readonly csvOptions: StorageInsightsReportConfigCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#csv_options StorageInsightsReportConfig#csv_options}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#location StorageInsightsReportConfig#location}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#display_name StorageInsightsReportConfig#display_name}

---

##### `frequencyOptions`<sup>Optional</sup> <a name="frequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.frequencyOptions"></a>

```typescript
public readonly frequencyOptions: StorageInsightsReportConfigFrequencyOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

frequency_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#frequency_options StorageInsightsReportConfig#frequency_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectMetadataReportOptions`<sup>Optional</sup> <a name="objectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.objectMetadataReportOptions"></a>

```typescript
public readonly objectMetadataReportOptions: StorageInsightsReportConfigObjectMetadataReportOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

object_metadata_report_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#object_metadata_report_options StorageInsightsReportConfig#object_metadata_report_options}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageInsightsReportConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#timeouts StorageInsightsReportConfig#timeouts}

---

### StorageInsightsReportConfigCsvOptions <a name="StorageInsightsReportConfigCsvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigCsvOptions: storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.delimiter">delimiter</a></code> | <code>string</code> | The delimiter used to separate the fields in the inventory report CSV file. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.headerRequired">headerRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | The boolean that indicates whether or not headers are included in the inventory report CSV file. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.recordSeparator">recordSeparator</a></code> | <code>string</code> | The character used to separate the records in the inventory report CSV file. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

The delimiter used to separate the fields in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#delimiter StorageInsightsReportConfig#delimiter}

---

##### `headerRequired`<sup>Optional</sup> <a name="headerRequired" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.headerRequired"></a>

```typescript
public readonly headerRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The boolean that indicates whether or not headers are included in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#header_required StorageInsightsReportConfig#header_required}

---

##### `recordSeparator`<sup>Optional</sup> <a name="recordSeparator" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.recordSeparator"></a>

```typescript
public readonly recordSeparator: string;
```

- *Type:* string

The character used to separate the records in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#record_separator StorageInsightsReportConfig#record_separator}

---

### StorageInsightsReportConfigFrequencyOptions <a name="StorageInsightsReportConfigFrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigFrequencyOptions: storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.frequency">frequency</a></code> | <code>string</code> | The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"]. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | start_date block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.endDate"></a>

```typescript
public readonly endDate: StorageInsightsReportConfigFrequencyOptionsEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#end_date StorageInsightsReportConfig#end_date}

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#frequency StorageInsightsReportConfig#frequency}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.startDate"></a>

```typescript
public readonly startDate: StorageInsightsReportConfigFrequencyOptionsStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#start_date StorageInsightsReportConfig#start_date}

---

### StorageInsightsReportConfigFrequencyOptionsEndDate <a name="StorageInsightsReportConfigFrequencyOptionsEndDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigFrequencyOptionsEndDate: storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.day">day</a></code> | <code>number</code> | The day of the month to stop generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.month">month</a></code> | <code>number</code> | The month to stop generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.year">year</a></code> | <code>number</code> | The year to stop generating inventory reports. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

The day of the month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

The month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

The year to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}

---

### StorageInsightsReportConfigFrequencyOptionsStartDate <a name="StorageInsightsReportConfigFrequencyOptionsStartDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigFrequencyOptionsStartDate: storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.day">day</a></code> | <code>number</code> | The day of the month to start generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.month">month</a></code> | <code>number</code> | The month to start generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.year">year</a></code> | <code>number</code> | The year to start generating inventory reports. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

The day of the month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

The month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

The year to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}

---

### StorageInsightsReportConfigObjectMetadataReportOptions <a name="StorageInsightsReportConfigObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigObjectMetadataReportOptions: storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | The metadata fields included in an inventory report. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions">storageDestinationOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | storage_destination_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters">storageFilters</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | storage_filters block. |

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

The metadata fields included in an inventory report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#metadata_fields StorageInsightsReportConfig#metadata_fields}

---

##### `storageDestinationOptions`<sup>Required</sup> <a name="storageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions"></a>

```typescript
public readonly storageDestinationOptions: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

storage_destination_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#storage_destination_options StorageInsightsReportConfig#storage_destination_options}

---

##### `storageFilters`<sup>Optional</sup> <a name="storageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters"></a>

```typescript
public readonly storageFilters: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

storage_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#storage_filters StorageInsightsReportConfig#storage_filters}

---

### StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions: storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket">bucket</a></code> | <code>string</code> | The destination bucket that stores the generated inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath">destinationPath</a></code> | <code>string</code> | The path within the destination bucket to store generated inventory reports. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The destination bucket that stores the generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

The path within the destination bucket to store generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#destination_path StorageInsightsReportConfig#destination_path}

---

### StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigObjectMetadataReportOptionsStorageFilters: storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket">bucket</a></code> | <code>string</code> | The filter to use when specifying which bucket to generate inventory reports for. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The filter to use when specifying which bucket to generate inventory reports for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}

---

### StorageInsightsReportConfigTimeouts <a name="StorageInsightsReportConfigTimeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

const storageInsightsReportConfigTimeouts: storageInsightsReportConfig.StorageInsightsReportConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageInsightsReportConfigCsvOptionsOutputReference <a name="StorageInsightsReportConfigCsvOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired">resetHeaderRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator">resetRecordSeparator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetHeaderRequired` <a name="resetHeaderRequired" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired"></a>

```typescript
public resetHeaderRequired(): void
```

##### `resetRecordSeparator` <a name="resetRecordSeparator" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator"></a>

```typescript
public resetRecordSeparator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput">headerRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput">recordSeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired">headerRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator">recordSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `headerRequiredInput`<sup>Optional</sup> <a name="headerRequiredInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput"></a>

```typescript
public readonly headerRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordSeparatorInput`<sup>Optional</sup> <a name="recordSeparatorInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput"></a>

```typescript
public readonly recordSeparatorInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `headerRequired`<sup>Required</sup> <a name="headerRequired" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired"></a>

```typescript
public readonly headerRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordSeparator`<sup>Required</sup> <a name="recordSeparator" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator"></a>

```typescript
public readonly recordSeparator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---


### StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigFrequencyOptionsEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---


### StorageInsightsReportConfigFrequencyOptionsOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate">putStartDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate"></a>

```typescript
public putEndDate(value: StorageInsightsReportConfigFrequencyOptionsEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate"></a>

```typescript
public putStartDate(value: StorageInsightsReportConfigFrequencyOptionsStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate"></a>

```typescript
public readonly endDate: StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate"></a>

```typescript
public readonly startDate: StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: StorageInsightsReportConfigFrequencyOptionsEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: StorageInsightsReportConfigFrequencyOptionsStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigFrequencyOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---


### StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigFrequencyOptionsStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions">putStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters">putStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters">resetStorageFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageDestinationOptions` <a name="putStorageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions"></a>

```typescript
public putStorageDestinationOptions(value: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `putStorageFilters` <a name="putStorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters"></a>

```typescript
public putStorageFilters(value: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `resetStorageFilters` <a name="resetStorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters"></a>

```typescript
public resetStorageFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions">storageDestinationOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters">storageFilters</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput">storageDestinationOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput">storageFiltersInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageDestinationOptions`<sup>Required</sup> <a name="storageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions"></a>

```typescript
public readonly storageDestinationOptions: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a>

---

##### `storageFilters`<sup>Required</sup> <a name="storageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters"></a>

```typescript
public readonly storageFilters: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a>

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput"></a>

```typescript
public readonly metadataFieldsInput: string[];
```

- *Type:* string[]

---

##### `storageDestinationOptionsInput`<sup>Optional</sup> <a name="storageDestinationOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput"></a>

```typescript
public readonly storageDestinationOptionsInput: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `storageFiltersInput`<sup>Optional</sup> <a name="storageFiltersInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput"></a>

```typescript
public readonly storageFiltersInput: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigObjectMetadataReportOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket">resetBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters;
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---


### StorageInsightsReportConfigTimeoutsOutputReference <a name="StorageInsightsReportConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageInsightsReportConfig } from '@cdktf/provider-google'

new storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageInsightsReportConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

---



