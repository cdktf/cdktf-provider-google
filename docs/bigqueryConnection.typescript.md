# `bigqueryConnection` Submodule <a name="`bigqueryConnection` Submodule" id="@cdktf/provider-google.bigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryConnection <a name="BigqueryConnection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnection(scope: Construct, id: string, config?: BigqueryConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig">BigqueryConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig">BigqueryConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource">putCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner">putCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql">putCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource">resetCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner">resetCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql">resetCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws"></a>

```typescript
public putAws(value: BigqueryConnectionAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure"></a>

```typescript
public putAzure(value: BigqueryConnectionAzure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `putCloudResource` <a name="putCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource"></a>

```typescript
public putCloudResource(value: BigqueryConnectionCloudResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `putCloudSpanner` <a name="putCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner"></a>

```typescript
public putCloudSpanner(value: BigqueryConnectionCloudSpanner): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `putCloudSql` <a name="putCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql"></a>

```typescript
public putCloudSql(value: BigqueryConnectionCloudSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark"></a>

```typescript
public putSpark(value: BigqueryConnectionSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure"></a>

```typescript
public resetAzure(): void
```

##### `resetCloudResource` <a name="resetCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource"></a>

```typescript
public resetCloudResource(): void
```

##### `resetCloudSpanner` <a name="resetCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner"></a>

```typescript
public resetCloudSpanner(): void
```

##### `resetCloudSql` <a name="resetCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql"></a>

```typescript
public resetCloudSql(): void
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

bigqueryConnection.BigqueryConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

bigqueryConnection.BigqueryConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

bigqueryConnection.BigqueryConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

bigqueryConnection.BigqueryConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential">hasCredential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference">BigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput">azureInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput">cloudResourceInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput">cloudSpannerInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput">cloudSqlInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws"></a>

```typescript
public readonly aws: BigqueryConnectionAwsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure"></a>

```typescript
public readonly azure: BigqueryConnectionAzureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a>

---

##### `cloudResource`<sup>Required</sup> <a name="cloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource"></a>

```typescript
public readonly cloudResource: BigqueryConnectionCloudResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloudSpanner`<sup>Required</sup> <a name="cloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner"></a>

```typescript
public readonly cloudSpanner: BigqueryConnectionCloudSpannerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloudSql`<sup>Required</sup> <a name="cloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql"></a>

```typescript
public readonly cloudSql: BigqueryConnectionCloudSqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a>

---

##### `hasCredential`<sup>Required</sup> <a name="hasCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential"></a>

```typescript
public readonly hasCredential: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.spark"></a>

```typescript
public readonly spark: BigqueryConnectionSparkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference">BigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput"></a>

```typescript
public readonly awsInput: BigqueryConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput"></a>

```typescript
public readonly azureInput: BigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `cloudResourceInput`<sup>Optional</sup> <a name="cloudResourceInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput"></a>

```typescript
public readonly cloudResourceInput: BigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `cloudSpannerInput`<sup>Optional</sup> <a name="cloudSpannerInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput"></a>

```typescript
public readonly cloudSpannerInput: BigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `cloudSqlInput`<sup>Optional</sup> <a name="cloudSqlInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput"></a>

```typescript
public readonly cloudSqlInput: BigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.sparkInput"></a>

```typescript
public readonly sparkInput: BigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryConnectionAws <a name="BigqueryConnectionAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionAws: bigqueryConnection.BigqueryConnectionAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole"></a>

```typescript
public readonly accessRole: BigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#access_role BigqueryConnection#access_role}

---

### BigqueryConnectionAwsAccessRole <a name="BigqueryConnectionAwsAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionAwsAccessRole: bigqueryConnection.BigqueryConnectionAwsAccessRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}

---

### BigqueryConnectionAzure <a name="BigqueryConnectionAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionAzure: bigqueryConnection.BigqueryConnectionAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId">customerTenantId</a></code> | <code>string</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>string</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId"></a>

```typescript
public readonly customerTenantId: string;
```

- *Type:* string

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}

---

##### `federatedApplicationClientId`<sup>Optional</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```typescript
public readonly federatedApplicationClientId: string;
```

- *Type:* string

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}

---

### BigqueryConnectionCloudResource <a name="BigqueryConnectionCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionCloudResource: bigqueryConnection.BigqueryConnectionCloudResource = { ... }
```


### BigqueryConnectionCloudSpanner <a name="BigqueryConnectionCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionCloudSpanner: bigqueryConnection.BigqueryConnectionCloudSpanner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>string</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.databaseRole">databaseRole</a></code> | <code>string</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.maxParallelism">maxParallelism</a></code> | <code>number</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useDataBoost">useDataBoost</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism">useParallelism</a></code> | <code>boolean \| cdktf.IResolvable</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#database_role BigqueryConnection#database_role}

---

##### `maxParallelism`<sup>Optional</sup> <a name="maxParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```typescript
public readonly maxParallelism: number;
```

- *Type:* number

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#max_parallelism BigqueryConnection#max_parallelism}

---

##### `useDataBoost`<sup>Optional</sup> <a name="useDataBoost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```typescript
public readonly useDataBoost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#use_data_boost BigqueryConnection#use_data_boost}

---

##### `useParallelism`<sup>Optional</sup> <a name="useParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism"></a>

```typescript
public readonly useParallelism: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}

---

##### `useServerlessAnalytics`<sup>Optional</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```typescript
public readonly useServerlessAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}

---

### BigqueryConnectionCloudSql <a name="BigqueryConnectionCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionCloudSql: bigqueryConnection.BigqueryConnectionCloudSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database">database</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId">instanceId</a></code> | <code>string</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type">type</a></code> | <code>string</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential"></a>

```typescript
public readonly credential: BigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#credential BigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#instance_id BigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#type BigqueryConnection#type}

---

### BigqueryConnectionCloudSqlCredential <a name="BigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionCloudSqlCredential: bigqueryConnection.BigqueryConnectionCloudSqlCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>string</code> | Password for database. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>string</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#password BigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#username BigqueryConnection#username}

---

### BigqueryConnectionConfig <a name="BigqueryConnectionConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionConfig: bigqueryConnection.BigqueryConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description">description</a></code> | <code>string</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName">friendlyName</a></code> | <code>string</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws"></a>

```typescript
public readonly aws: BigqueryConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#aws BigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure"></a>

```typescript
public readonly azure: BigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#azure BigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource"></a>

```typescript
public readonly cloudResource: BigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner"></a>

```typescript
public readonly cloudSpanner: BigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql"></a>

```typescript
public readonly cloudSql: BigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#description BigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#kms_key_name BigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#location BigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#project BigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.spark"></a>

```typescript
public readonly spark: BigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#spark BigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

### BigqueryConnectionSpark <a name="BigqueryConnectionSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionSpark: bigqueryConnection.BigqueryConnectionSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreServiceConfig`<sup>Optional</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```typescript
public readonly metastoreServiceConfig: BigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#metastore_service_config BigqueryConnection#metastore_service_config}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: BigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#spark_history_server_config BigqueryConnection#spark_history_server_config}

---

### BigqueryConnectionSparkMetastoreServiceConfig <a name="BigqueryConnectionSparkMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionSparkMetastoreServiceConfig: bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#metastore_service BigqueryConnection#metastore_service}

---

### BigqueryConnectionSparkSparkHistoryServerConfig <a name="BigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionSparkSparkHistoryServerConfig: bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#dataproc_cluster BigqueryConnection#dataproc_cluster}

---

### BigqueryConnectionTimeouts <a name="BigqueryConnectionTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

const bigqueryConnectionTimeouts: bigqueryConnection.BigqueryConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#create BigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#update BigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#create BigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_connection#update BigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryConnectionAwsAccessRoleOutputReference <a name="BigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iamRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `iamRoleIdInput`<sup>Optional</sup> <a name="iamRoleIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```typescript
public readonly iamRoleIdInput: string;
```

- *Type:* string

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


### BigqueryConnectionAwsOutputReference <a name="BigqueryConnectionAwsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole">putAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRole` <a name="putAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole"></a>

```typescript
public putAccessRole(value: BigqueryConnectionAwsAccessRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole"></a>

```typescript
public readonly accessRole: BigqueryConnectionAwsAccessRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: BigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---


### BigqueryConnectionAzureOutputReference <a name="BigqueryConnectionAzureOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">resetFederatedApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFederatedApplicationClientId` <a name="resetFederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```typescript
public resetFederatedApplicationClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customerTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federatedApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId">customerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `customerTenantIdInput`<sup>Optional</sup> <a name="customerTenantIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```typescript
public readonly customerTenantIdInput: string;
```

- *Type:* string

---

##### `federatedApplicationClientIdInput`<sup>Optional</sup> <a name="federatedApplicationClientIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```typescript
public readonly federatedApplicationClientIdInput: string;
```

- *Type:* string

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```typescript
public readonly customerTenantId: string;
```

- *Type:* string

---

##### `federatedApplicationClientId`<sup>Required</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```typescript
public readonly federatedApplicationClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---


### BigqueryConnectionCloudResourceOutputReference <a name="BigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionCloudResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---


### BigqueryConnectionCloudSpannerOutputReference <a name="BigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">resetMaxParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">resetUseDataBoost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">resetUseParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">resetUseServerlessAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```

##### `resetMaxParallelism` <a name="resetMaxParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```typescript
public resetMaxParallelism(): void
```

##### `resetUseDataBoost` <a name="resetUseDataBoost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```typescript
public resetUseDataBoost(): void
```

##### `resetUseParallelism` <a name="resetUseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```typescript
public resetUseParallelism(): void
```

##### `resetUseServerlessAnalytics` <a name="resetUseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```typescript
public resetUseServerlessAnalytics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">maxParallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">useDataBoostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">useParallelismInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">useServerlessAnalyticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">maxParallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">useDataBoost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism">useParallelism</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `maxParallelismInput`<sup>Optional</sup> <a name="maxParallelismInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```typescript
public readonly maxParallelismInput: number;
```

- *Type:* number

---

##### `useDataBoostInput`<sup>Optional</sup> <a name="useDataBoostInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```typescript
public readonly useDataBoostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useParallelismInput`<sup>Optional</sup> <a name="useParallelismInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```typescript
public readonly useParallelismInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useServerlessAnalyticsInput`<sup>Optional</sup> <a name="useServerlessAnalyticsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```typescript
public readonly useServerlessAnalyticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `maxParallelism`<sup>Required</sup> <a name="maxParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```typescript
public readonly maxParallelism: number;
```

- *Type:* number

---

##### `useDataBoost`<sup>Required</sup> <a name="useDataBoost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```typescript
public readonly useDataBoost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useParallelism`<sup>Required</sup> <a name="useParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```typescript
public readonly useParallelism: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useServerlessAnalytics`<sup>Required</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```typescript
public readonly useServerlessAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---


### BigqueryConnectionCloudSqlCredentialOutputReference <a name="BigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


### BigqueryConnectionCloudSqlOutputReference <a name="BigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionCloudSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```typescript
public putCredential(value: BigqueryConnectionCloudSqlCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```typescript
public readonly credential: BigqueryConnectionCloudSqlCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: BigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---


### BigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="BigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```typescript
public resetMetastoreService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```typescript
public readonly metastoreServiceInput: string;
```

- *Type:* string

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---


### BigqueryConnectionSparkOutputReference <a name="BigqueryConnectionSparkOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">putMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">resetMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetastoreServiceConfig` <a name="putMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```typescript
public putMetastoreServiceConfig(value: BigqueryConnectionSparkMetastoreServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```typescript
public putSparkHistoryServerConfig(value: BigqueryConnectionSparkSparkHistoryServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `resetMetastoreServiceConfig` <a name="resetMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```typescript
public resetMetastoreServiceConfig(): void
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```typescript
public resetSparkHistoryServerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference">BigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference">BigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastoreServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreServiceConfig`<sup>Required</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```typescript
public readonly metastoreServiceConfig: BigqueryConnectionSparkMetastoreServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference">BigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: BigqueryConnectionSparkSparkHistoryServerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference">BigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceConfigInput`<sup>Optional</sup> <a name="metastoreServiceConfigInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```typescript
public readonly metastoreServiceConfigInput: BigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```typescript
public readonly sparkHistoryServerConfigInput: BigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---


### BigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="BigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```typescript
public resetDataprocCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```typescript
public readonly dataprocClusterInput: string;
```

- *Type:* string

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### BigqueryConnectionTimeoutsOutputReference <a name="BigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryConnection } from '@cdktf/provider-google'

new bigqueryConnection.BigqueryConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---



