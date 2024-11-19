# `dataLossPreventionStoredInfoType` Submodule <a name="`dataLossPreventionStoredInfoType` Submodule" id="@cdktf/provider-google.dataLossPreventionStoredInfoType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLossPreventionStoredInfoType <a name="DataLossPreventionStoredInfoType" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType(scope: Construct, id: string, config: DataLossPreventionStoredInfoTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig">DataLossPreventionStoredInfoTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig">DataLossPreventionStoredInfoTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary">putDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary">putLargeCustomDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex">putRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDictionary">resetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetLargeCustomDictionary">resetLargeCustomDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetStoredInfoTypeId">resetStoredInfoTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDictionary` <a name="putDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary"></a>

```typescript
public putDictionary(value: DataLossPreventionStoredInfoTypeDictionary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

---

##### `putLargeCustomDictionary` <a name="putLargeCustomDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary"></a>

```typescript
public putLargeCustomDictionary(value: DataLossPreventionStoredInfoTypeLargeCustomDictionary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---

##### `putRegex` <a name="putRegex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex"></a>

```typescript
public putRegex(value: DataLossPreventionStoredInfoTypeRegex): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts"></a>

```typescript
public putTimeouts(value: DataLossPreventionStoredInfoTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDictionary` <a name="resetDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDictionary"></a>

```typescript
public resetDictionary(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLargeCustomDictionary` <a name="resetLargeCustomDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetLargeCustomDictionary"></a>

```typescript
public resetLargeCustomDictionary(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetStoredInfoTypeId` <a name="resetStoredInfoTypeId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetStoredInfoTypeId"></a>

```typescript
public resetStoredInfoTypeId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLossPreventionStoredInfoType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLossPreventionStoredInfoType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLossPreventionStoredInfoType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference">DataLossPreventionStoredInfoTypeDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionary">largeCustomDictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference">DataLossPreventionStoredInfoTypeRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference">DataLossPreventionStoredInfoTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionaryInput">dictionaryInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionaryInput">largeCustomDictionaryInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regexInput">regexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeIdInput">storedInfoTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeId">storedInfoTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionary"></a>

```typescript
public readonly dictionary: DataLossPreventionStoredInfoTypeDictionaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference">DataLossPreventionStoredInfoTypeDictionaryOutputReference</a>

---

##### `largeCustomDictionary`<sup>Required</sup> <a name="largeCustomDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionary"></a>

```typescript
public readonly largeCustomDictionary: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regex"></a>

```typescript
public readonly regex: DataLossPreventionStoredInfoTypeRegexOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference">DataLossPreventionStoredInfoTypeRegexOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeouts"></a>

```typescript
public readonly timeouts: DataLossPreventionStoredInfoTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference">DataLossPreventionStoredInfoTypeTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dictionaryInput`<sup>Optional</sup> <a name="dictionaryInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionaryInput"></a>

```typescript
public readonly dictionaryInput: DataLossPreventionStoredInfoTypeDictionary;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `largeCustomDictionaryInput`<sup>Optional</sup> <a name="largeCustomDictionaryInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionaryInput"></a>

```typescript
public readonly largeCustomDictionaryInput: DataLossPreventionStoredInfoTypeLargeCustomDictionary;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regexInput"></a>

```typescript
public readonly regexInput: DataLossPreventionStoredInfoTypeRegex;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

---

##### `storedInfoTypeIdInput`<sup>Optional</sup> <a name="storedInfoTypeIdInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeIdInput"></a>

```typescript
public readonly storedInfoTypeIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataLossPreventionStoredInfoTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `storedInfoTypeId`<sup>Required</sup> <a name="storedInfoTypeId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeId"></a>

```typescript
public readonly storedInfoTypeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLossPreventionStoredInfoTypeConfig <a name="DataLossPreventionStoredInfoTypeConfig" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeConfig: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the info type in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.description">description</a></code> | <code>string</code> | A description of the info type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.displayName">displayName</a></code> | <code>string</code> | User set display name of the info type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.largeCustomDictionary">largeCustomDictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | large_custom_dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.storedInfoTypeId">storedInfoTypeId</a></code> | <code>string</code> | The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the info type in any of the following formats:.

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#parent DataLossPreventionStoredInfoType#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#description DataLossPreventionStoredInfoType#description}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dictionary"></a>

```typescript
public readonly dictionary: DataLossPreventionStoredInfoTypeDictionary;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#dictionary DataLossPreventionStoredInfoType#dictionary}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User set display name of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#display_name DataLossPreventionStoredInfoType#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `largeCustomDictionary`<sup>Optional</sup> <a name="largeCustomDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.largeCustomDictionary"></a>

```typescript
public readonly largeCustomDictionary: DataLossPreventionStoredInfoTypeLargeCustomDictionary;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

large_custom_dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#large_custom_dictionary DataLossPreventionStoredInfoType#large_custom_dictionary}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.regex"></a>

```typescript
public readonly regex: DataLossPreventionStoredInfoTypeRegex;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

regex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#regex DataLossPreventionStoredInfoType#regex}

---

##### `storedInfoTypeId`<sup>Optional</sup> <a name="storedInfoTypeId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.storedInfoTypeId"></a>

```typescript
public readonly storedInfoTypeId: string;
```

- *Type:* string

The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;

that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#stored_info_type_id DataLossPreventionStoredInfoType#stored_info_type_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataLossPreventionStoredInfoTypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#timeouts DataLossPreventionStoredInfoType#timeouts}

---

### DataLossPreventionStoredInfoTypeDictionary <a name="DataLossPreventionStoredInfoTypeDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeDictionary: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.cloudStoragePath">cloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.wordList">wordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | word_list block. |

---

##### `cloudStoragePath`<sup>Optional</sup> <a name="cloudStoragePath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.cloudStoragePath"></a>

```typescript
public readonly cloudStoragePath: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#cloud_storage_path DataLossPreventionStoredInfoType#cloud_storage_path}

---

##### `wordList`<sup>Optional</sup> <a name="wordList" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.wordList"></a>

```typescript
public readonly wordList: DataLossPreventionStoredInfoTypeDictionaryWordListStruct;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

word_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#word_list DataLossPreventionStoredInfoType#word_list}

---

### DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath <a name="DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeDictionaryCloudStoragePath: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.property.path">path</a></code> | <code>string</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}

---

### DataLossPreventionStoredInfoTypeDictionaryWordListStruct <a name="DataLossPreventionStoredInfoTypeDictionaryWordListStruct" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeDictionaryWordListStruct: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct.property.words">words</a></code> | <code>string[]</code> | Words or phrases defining the dictionary. |

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#words DataLossPreventionStoredInfoType#words}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionary <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeLargeCustomDictionary: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.outputPath">outputPath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | output_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.bigQueryField">bigQueryField</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | big_query_field block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.cloudStorageFileSet">cloudStorageFileSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | cloud_storage_file_set block. |

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.outputPath"></a>

```typescript
public readonly outputPath: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

output_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#output_path DataLossPreventionStoredInfoType#output_path}

---

##### `bigQueryField`<sup>Optional</sup> <a name="bigQueryField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.bigQueryField"></a>

```typescript
public readonly bigQueryField: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

big_query_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#big_query_field DataLossPreventionStoredInfoType#big_query_field}

---

##### `cloudStorageFileSet`<sup>Optional</sup> <a name="cloudStorageFileSet" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.cloudStorageFileSet"></a>

```typescript
public readonly cloudStorageFileSet: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

cloud_storage_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#cloud_storage_file_set DataLossPreventionStoredInfoType#cloud_storage_file_set}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.field">field</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | field block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | table block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.field"></a>

```typescript
public readonly field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#field DataLossPreventionStoredInfoType#field}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.table"></a>

```typescript
public readonly table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#table DataLossPreventionStoredInfoType#table}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.property.name">name</a></code> | <code>string</code> | Name describing the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#name DataLossPreventionStoredInfoType#name}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.datasetId">datasetId</a></code> | <code>string</code> | The dataset ID of the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.projectId">projectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.tableId">tableId</a></code> | <code>string</code> | The name of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#dataset_id DataLossPreventionStoredInfoType#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#project_id DataLossPreventionStoredInfoType#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#table_id DataLossPreventionStoredInfoType#table_id}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.property.url">url</a></code> | <code>string</code> | The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#url DataLossPreventionStoredInfoType#url}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.property.path">path</a></code> | <code>string</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}

---

### DataLossPreventionStoredInfoTypeRegex <a name="DataLossPreventionStoredInfoTypeRegex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeRegex: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.pattern">pattern</a></code> | <code>string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.groupIndexes">groupIndexes</a></code> | <code>number[]</code> | The index of the submatch to extract as findings. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#pattern DataLossPreventionStoredInfoType#pattern}

---

##### `groupIndexes`<sup>Optional</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.groupIndexes"></a>

```typescript
public readonly groupIndexes: number[];
```

- *Type:* number[]

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#group_indexes DataLossPreventionStoredInfoType#group_indexes}

---

### DataLossPreventionStoredInfoTypeTimeouts <a name="DataLossPreventionStoredInfoTypeTimeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

const dataLossPreventionStoredInfoTypeTimeouts: dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#create DataLossPreventionStoredInfoType#create}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#delete DataLossPreventionStoredInfoType#delete}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#update DataLossPreventionStoredInfoType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#create DataLossPreventionStoredInfoType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#delete DataLossPreventionStoredInfoType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/data_loss_prevention_stored_info_type#update DataLossPreventionStoredInfoType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference <a name="DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---


### DataLossPreventionStoredInfoTypeDictionaryOutputReference <a name="DataLossPreventionStoredInfoTypeDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath">putCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList">putWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetCloudStoragePath">resetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetWordList">resetWordList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStoragePath` <a name="putCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath"></a>

```typescript
public putCloudStoragePath(value: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---

##### `putWordList` <a name="putWordList" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList"></a>

```typescript
public putWordList(value: DataLossPreventionStoredInfoTypeDictionaryWordListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---

##### `resetCloudStoragePath` <a name="resetCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetCloudStoragePath"></a>

```typescript
public resetCloudStoragePath(): void
```

##### `resetWordList` <a name="resetWordList" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetWordList"></a>

```typescript
public resetWordList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePath">cloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordList">wordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference">DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePathInput">cloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordListInput">wordListInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudStoragePath`<sup>Required</sup> <a name="cloudStoragePath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePath"></a>

```typescript
public readonly cloudStoragePath: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference</a>

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordList"></a>

```typescript
public readonly wordList: DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference">DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference</a>

---

##### `cloudStoragePathInput`<sup>Optional</sup> <a name="cloudStoragePathInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePathInput"></a>

```typescript
public readonly cloudStoragePathInput: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---

##### `wordListInput`<sup>Optional</sup> <a name="wordListInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordListInput"></a>

```typescript
public readonly wordListInput: DataLossPreventionStoredInfoTypeDictionaryWordListStruct;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeDictionary;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

---


### DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference <a name="DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.wordsInput">wordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.words">words</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.wordsInput"></a>

```typescript
public readonly wordsInput: string[];
```

- *Type:* string[]

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeDictionaryWordListStruct;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable">putTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putField` <a name="putField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField"></a>

```typescript
public putField(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable"></a>

```typescript
public putTable(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fieldInput">fieldInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.field"></a>

```typescript
public readonly field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.table"></a>

```typescript
public readonly table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField">putBigQueryField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet">putCloudStorageFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath">putOutputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetBigQueryField">resetBigQueryField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetCloudStorageFileSet">resetCloudStorageFileSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigQueryField` <a name="putBigQueryField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField"></a>

```typescript
public putBigQueryField(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---

##### `putCloudStorageFileSet` <a name="putCloudStorageFileSet" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet"></a>

```typescript
public putCloudStorageFileSet(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---

##### `putOutputPath` <a name="putOutputPath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath"></a>

```typescript
public putOutputPath(value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---

##### `resetBigQueryField` <a name="resetBigQueryField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetBigQueryField"></a>

```typescript
public resetBigQueryField(): void
```

##### `resetCloudStorageFileSet` <a name="resetCloudStorageFileSet" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetCloudStorageFileSet"></a>

```typescript
public resetCloudStorageFileSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryField">bigQueryField</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSet">cloudStorageFileSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPath">outputPath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryFieldInput">bigQueryFieldInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSetInput">cloudStorageFileSetInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPathInput">outputPathInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigQueryField`<sup>Required</sup> <a name="bigQueryField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryField"></a>

```typescript
public readonly bigQueryField: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference</a>

---

##### `cloudStorageFileSet`<sup>Required</sup> <a name="cloudStorageFileSet" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSet"></a>

```typescript
public readonly cloudStorageFileSet: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference</a>

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPath"></a>

```typescript
public readonly outputPath: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference</a>

---

##### `bigQueryFieldInput`<sup>Optional</sup> <a name="bigQueryFieldInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryFieldInput"></a>

```typescript
public readonly bigQueryFieldInput: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---

##### `cloudStorageFileSetInput`<sup>Optional</sup> <a name="cloudStorageFileSetInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSetInput"></a>

```typescript
public readonly cloudStorageFileSetInput: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---

##### `outputPathInput`<sup>Optional</sup> <a name="outputPathInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPathInput"></a>

```typescript
public readonly outputPathInput: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeLargeCustomDictionary;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---


### DataLossPreventionStoredInfoTypeRegexOutputReference <a name="DataLossPreventionStoredInfoTypeRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resetGroupIndexes">resetGroupIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupIndexes` <a name="resetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resetGroupIndexes"></a>

```typescript
public resetGroupIndexes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexesInput">groupIndexesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexes">groupIndexes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIndexesInput`<sup>Optional</sup> <a name="groupIndexesInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexesInput"></a>

```typescript
public readonly groupIndexesInput: number[];
```

- *Type:* number[]

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `groupIndexes`<sup>Required</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexes"></a>

```typescript
public readonly groupIndexes: number[];
```

- *Type:* number[]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionStoredInfoTypeRegex;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

---


### DataLossPreventionStoredInfoTypeTimeoutsOutputReference <a name="DataLossPreventionStoredInfoTypeTimeoutsOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionStoredInfoType } from '@cdktf/provider-google'

new dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLossPreventionStoredInfoTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>

---



