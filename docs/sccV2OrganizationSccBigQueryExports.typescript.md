# `sccV2OrganizationSccBigQueryExports` Submodule <a name="`sccV2OrganizationSccBigQueryExports` Submodule" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSccBigQueryExports <a name="SccV2OrganizationSccBigQueryExports" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports google_scc_v2_organization_scc_big_query_exports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

new sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports(scope: Construct, id: string, config: SccV2OrganizationSccBigQueryExportsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig">SccV2OrganizationSccBigQueryExportsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig">SccV2OrganizationSccBigQueryExportsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.putTimeouts"></a>

```typescript
public putTimeouts(value: SccV2OrganizationSccBigQueryExportsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a>

---

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDataset"></a>

```typescript
public resetDataset(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationSccBigQueryExports resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isConstruct"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccV2OrganizationSccBigQueryExports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2OrganizationSccBigQueryExports to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2OrganizationSccBigQueryExports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSccBigQueryExports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.mostRecentEditor">mostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference">SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportIdInput">bigQueryExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportId">bigQueryExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `mostRecentEditor`<sup>Required</sup> <a name="mostRecentEditor" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.mostRecentEditor"></a>

```typescript
public readonly mostRecentEditor: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference">SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `bigQueryExportIdInput`<sup>Optional</sup> <a name="bigQueryExportIdInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportIdInput"></a>

```typescript
public readonly bigQueryExportIdInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccV2OrganizationSccBigQueryExportsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.bigQueryExportId"></a>

```typescript
public readonly bigQueryExportId: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExports.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSccBigQueryExportsConfig <a name="SccV2OrganizationSccBigQueryExportsConfig" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.Initializer"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

const sccV2OrganizationSccBigQueryExportsConfig: sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.bigQueryExportId">bigQueryExportId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.organization">organization</a></code> | <code>string</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dataset">dataset</a></code> | <code>string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.description">description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.filter">filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#id SccV2OrganizationSccBigQueryExports#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.location">location</a></code> | <code>string</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.name">name</a></code> | <code>string</code> | The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.bigQueryExportId"></a>

```typescript
public readonly bigQueryExportId: string;
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#big_query_export_id SccV2OrganizationSccBigQueryExports#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#organization SccV2OrganizationSccBigQueryExports#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#dataset SccV2OrganizationSccBigQueryExports#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#description SccV2OrganizationSccBigQueryExports#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

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
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#filter SccV2OrganizationSccBigQueryExports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#id SccV2OrganizationSccBigQueryExports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#location SccV2OrganizationSccBigQueryExports#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'.

This field is provided in responses, and is ignored when provided in create requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#name SccV2OrganizationSccBigQueryExports#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2OrganizationSccBigQueryExportsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#timeouts SccV2OrganizationSccBigQueryExports#timeouts}

---

### SccV2OrganizationSccBigQueryExportsTimeouts <a name="SccV2OrganizationSccBigQueryExportsTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.Initializer"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

const sccV2OrganizationSccBigQueryExportsTimeouts: sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#create SccV2OrganizationSccBigQueryExports#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#delete SccV2OrganizationSccBigQueryExports#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#update SccV2OrganizationSccBigQueryExports#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#create SccV2OrganizationSccBigQueryExports#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#delete SccV2OrganizationSccBigQueryExports#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/scc_v2_organization_scc_big_query_exports#update SccV2OrganizationSccBigQueryExports#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference <a name="SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccV2OrganizationSccBigQueryExports } from '@cdktf/provider-google'

new sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccV2OrganizationSccBigQueryExportsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExports.SccV2OrganizationSccBigQueryExportsTimeouts">SccV2OrganizationSccBigQueryExportsTimeouts</a>

---



