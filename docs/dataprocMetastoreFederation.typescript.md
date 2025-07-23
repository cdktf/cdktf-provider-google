# `dataprocMetastoreFederation` Submodule <a name="`dataprocMetastoreFederation` Submodule" id="@cdktf/provider-google.dataprocMetastoreFederation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreFederation <a name="DataprocMetastoreFederation" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation google_dataproc_metastore_federation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

new dataprocMetastoreFederation.DataprocMetastoreFederation(scope: Construct, id: string, config: DataprocMetastoreFederationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig">DataprocMetastoreFederationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig">DataprocMetastoreFederationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putBackendMetastores">putBackendMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendMetastores` <a name="putBackendMetastores" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putBackendMetastores"></a>

```typescript
public putBackendMetastores(value: IResolvable | DataprocMetastoreFederationBackendMetastores[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putBackendMetastores.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putTimeouts"></a>

```typescript
public putTimeouts(value: DataprocMetastoreFederationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocMetastoreFederation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataprocMetastoreFederation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocMetastoreFederation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocMetastoreFederation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreFederation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastores">backendMetastores</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList">DataprocMetastoreFederationBackendMetastoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference">DataprocMetastoreFederationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastoresInput">backendMetastoresInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationIdInput">federationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationId">federationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastores"></a>

```typescript
public readonly backendMetastores: DataprocMetastoreFederationBackendMetastoresList;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList">DataprocMetastoreFederationBackendMetastoresList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocMetastoreFederationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference">DataprocMetastoreFederationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backendMetastoresInput`<sup>Optional</sup> <a name="backendMetastoresInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastoresInput"></a>

```typescript
public readonly backendMetastoresInput: IResolvable | DataprocMetastoreFederationBackendMetastores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `federationIdInput`<sup>Optional</sup> <a name="federationIdInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationIdInput"></a>

```typescript
public readonly federationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataprocMetastoreFederationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationId"></a>

```typescript
public readonly federationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreFederationBackendMetastores <a name="DataprocMetastoreFederationBackendMetastores" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

const dataprocMetastoreFederationBackendMetastores: dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.metastoreType">metastoreType</a></code> | <code>string</code> | The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.name">name</a></code> | <code>string</code> | The relative resource name of the metastore that is being federated. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.rank">rank</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#rank DataprocMetastoreFederation#rank}. |

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.metastoreType"></a>

```typescript
public readonly metastoreType: string;
```

- *Type:* string

The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#metastore_type DataprocMetastoreFederation#metastore_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The relative resource name of the metastore that is being federated.

The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#name DataprocMetastoreFederation#name}

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.rank"></a>

```typescript
public readonly rank: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#rank DataprocMetastoreFederation#rank}.

---

### DataprocMetastoreFederationConfig <a name="DataprocMetastoreFederationConfig" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

const dataprocMetastoreFederationConfig: dataprocMetastoreFederation.DataprocMetastoreFederationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.backendMetastores">backendMetastores</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]</code> | backend_metastores block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.federationId">federationId</a></code> | <code>string</code> | The ID of the metastore federation. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.version">version</a></code> | <code>string</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the federation. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#id DataprocMetastoreFederation#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.location">location</a></code> | <code>string</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#project DataprocMetastoreFederation#project}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.backendMetastores"></a>

```typescript
public readonly backendMetastores: IResolvable | DataprocMetastoreFederationBackendMetastores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#backend_metastores DataprocMetastoreFederation#backend_metastores}

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.federationId"></a>

```typescript
public readonly federationId: string;
```

- *Type:* string

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#federation_id DataprocMetastoreFederation#federation_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#version DataprocMetastoreFederation#version}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the federation.

Defaults to false.
When the field is set to true in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the federation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#deletion_protection DataprocMetastoreFederation#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#id DataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#labels DataprocMetastoreFederation#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#location DataprocMetastoreFederation#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#project DataprocMetastoreFederation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocMetastoreFederationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#timeouts DataprocMetastoreFederation#timeouts}

---

### DataprocMetastoreFederationTimeouts <a name="DataprocMetastoreFederationTimeouts" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

const dataprocMetastoreFederationTimeouts: dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#create DataprocMetastoreFederation#create}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#delete DataprocMetastoreFederation#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#update DataprocMetastoreFederation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#create DataprocMetastoreFederation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#delete DataprocMetastoreFederation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_metastore_federation#update DataprocMetastoreFederation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreFederationBackendMetastoresList <a name="DataprocMetastoreFederationBackendMetastoresList" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

new dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.get"></a>

```typescript
public get(index: number): DataprocMetastoreFederationBackendMetastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreFederationBackendMetastores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

---


### DataprocMetastoreFederationBackendMetastoresOutputReference <a name="DataprocMetastoreFederationBackendMetastoresOutputReference" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

new dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput">metastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput">rankInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType">metastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rank">rank</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreTypeInput`<sup>Optional</sup> <a name="metastoreTypeInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput"></a>

```typescript
public readonly metastoreTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput"></a>

```typescript
public readonly rankInput: string;
```

- *Type:* string

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType"></a>

```typescript
public readonly metastoreType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rank"></a>

```typescript
public readonly rank: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreFederationBackendMetastores;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>

---


### DataprocMetastoreFederationTimeoutsOutputReference <a name="DataprocMetastoreFederationTimeoutsOutputReference" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreFederation } from '@cdktf/provider-google'

new dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreFederationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

---



