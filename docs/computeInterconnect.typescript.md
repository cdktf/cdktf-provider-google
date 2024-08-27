# `computeInterconnect` Submodule <a name="`computeInterconnect` Submodule" id="@cdktf/provider-google.computeInterconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnect <a name="ComputeInterconnect" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect google_compute_interconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnect(scope: Construct, id: string, config: ComputeInterconnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig">ComputeInterconnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig">ComputeInterconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec">putMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec">resetMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled">resetMacsecEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail">resetNocContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation">resetRemoteLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures">resetRequestedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMacsec` <a name="putMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec"></a>

```typescript
public putMacsec(value: ComputeInterconnectMacsec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInterconnectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMacsec` <a name="resetMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec"></a>

```typescript
public resetMacsec(): void
```

##### `resetMacsecEnabled` <a name="resetMacsecEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled"></a>

```typescript
public resetMacsecEnabled(): void
```

##### `resetNocContactEmail` <a name="resetNocContactEmail" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail"></a>

```typescript
public resetNocContactEmail(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoteLocation` <a name="resetRemoteLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation"></a>

```typescript
public resetRemoteLocation(): void
```

##### `resetRequestedFeatures` <a name="resetRequestedFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures"></a>

```typescript
public resetRequestedFeatures(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

computeInterconnect.ComputeInterconnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

computeInterconnect.ComputeInterconnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

computeInterconnect.ComputeInterconnect.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

computeInterconnect.ComputeInterconnect.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInterconnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInterconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInterconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures">availableFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos">circuitInfos</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages">expectedOutages</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress">googleIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId">googleReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments">interconnectAttachments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus">operationalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount">provisionedLinkCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs">satisfiesPzs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput">customerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput">interconnectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput">linkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput">macsecEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput">macsecInput</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput">nocContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput">remoteLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput">requestedFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput">requestedLinkCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerName">customerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType">interconnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkType">linkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled">macsecEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail">nocContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation">remoteLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures">requestedFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount">requestedLinkCount</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availableFeatures`<sup>Required</sup> <a name="availableFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures"></a>

```typescript
public readonly availableFeatures: string[];
```

- *Type:* string[]

---

##### `circuitInfos`<sup>Required</sup> <a name="circuitInfos" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos"></a>

```typescript
public readonly circuitInfos: ComputeInterconnectCircuitInfosList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `expectedOutages`<sup>Required</sup> <a name="expectedOutages" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages"></a>

```typescript
public readonly expectedOutages: ComputeInterconnectExpectedOutagesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a>

---

##### `googleIpAddress`<sup>Required</sup> <a name="googleIpAddress" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress"></a>

```typescript
public readonly googleIpAddress: string;
```

- *Type:* string

---

##### `googleReferenceId`<sup>Required</sup> <a name="googleReferenceId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId"></a>

```typescript
public readonly googleReferenceId: string;
```

- *Type:* string

---

##### `interconnectAttachments`<sup>Required</sup> <a name="interconnectAttachments" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments"></a>

```typescript
public readonly interconnectAttachments: string[];
```

- *Type:* string[]

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `macsec`<sup>Required</sup> <a name="macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsec"></a>

```typescript
public readonly macsec: ComputeInterconnectMacsecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a>

---

##### `operationalStatus`<sup>Required</sup> <a name="operationalStatus" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus"></a>

```typescript
public readonly operationalStatus: string;
```

- *Type:* string

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

---

##### `provisionedLinkCount`<sup>Required</sup> <a name="provisionedLinkCount" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount"></a>

```typescript
public readonly provisionedLinkCount: number;
```

- *Type:* number

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs"></a>

```typescript
public readonly satisfiesPzs: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInterconnectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customerNameInput`<sup>Optional</sup> <a name="customerNameInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput"></a>

```typescript
public readonly customerNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectTypeInput`<sup>Optional</sup> <a name="interconnectTypeInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput"></a>

```typescript
public readonly interconnectTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linkTypeInput`<sup>Optional</sup> <a name="linkTypeInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput"></a>

```typescript
public readonly linkTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `macsecEnabledInput`<sup>Optional</sup> <a name="macsecEnabledInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput"></a>

```typescript
public readonly macsecEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macsecInput`<sup>Optional</sup> <a name="macsecInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput"></a>

```typescript
public readonly macsecInput: ComputeInterconnectMacsec;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nocContactEmailInput`<sup>Optional</sup> <a name="nocContactEmailInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput"></a>

```typescript
public readonly nocContactEmailInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteLocationInput`<sup>Optional</sup> <a name="remoteLocationInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput"></a>

```typescript
public readonly remoteLocationInput: string;
```

- *Type:* string

---

##### `requestedFeaturesInput`<sup>Optional</sup> <a name="requestedFeaturesInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput"></a>

```typescript
public readonly requestedFeaturesInput: string[];
```

- *Type:* string[]

---

##### `requestedLinkCountInput`<sup>Optional</sup> <a name="requestedLinkCountInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput"></a>

```typescript
public readonly requestedLinkCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInterconnectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerName"></a>

```typescript
public readonly customerName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnectType`<sup>Required</sup> <a name="interconnectType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType"></a>

```typescript
public readonly interconnectType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linkType`<sup>Required</sup> <a name="linkType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkType"></a>

```typescript
public readonly linkType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `macsecEnabled`<sup>Required</sup> <a name="macsecEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled"></a>

```typescript
public readonly macsecEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nocContactEmail`<sup>Required</sup> <a name="nocContactEmail" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail"></a>

```typescript
public readonly nocContactEmail: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `remoteLocation`<sup>Required</sup> <a name="remoteLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation"></a>

```typescript
public readonly remoteLocation: string;
```

- *Type:* string

---

##### `requestedFeatures`<sup>Required</sup> <a name="requestedFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures"></a>

```typescript
public readonly requestedFeatures: string[];
```

- *Type:* string[]

---

##### `requestedLinkCount`<sup>Required</sup> <a name="requestedLinkCount" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount"></a>

```typescript
public readonly requestedLinkCount: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectCircuitInfos <a name="ComputeInterconnectCircuitInfos" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

const computeInterconnectCircuitInfos: computeInterconnect.ComputeInterconnectCircuitInfos = { ... }
```


### ComputeInterconnectConfig <a name="ComputeInterconnectConfig" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

const computeInterconnectConfig: computeInterconnect.ComputeInterconnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName">customerName</a></code> | <code>string</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType">interconnectType</a></code> | <code>string</code> | Type of interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType">linkType</a></code> | <code>string</code> | Type of link requested. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location">location</a></code> | <code>string</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount">requestedLinkCount</a></code> | <code>number</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled">macsecEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail">nocContactEmail</a></code> | <code>string</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation">remoteLocation</a></code> | <code>string</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures">requestedFeatures</a></code> | <code>string[]</code> | interconnects.list of features requested for this Interconnect connection. Options: MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Possible values: ["MACSEC"]. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName"></a>

```typescript
public readonly customerName: string;
```

- *Type:* string

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#customer_name ComputeInterconnect#customer_name}

---

##### `interconnectType`<sup>Required</sup> <a name="interconnectType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType"></a>

```typescript
public readonly interconnectType: string;
```

- *Type:* string

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:
  - PARTNER: A partner-managed interconnection shared between customers though a partner.
  - DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#interconnect_type ComputeInterconnect#interconnect_type}

---

##### `linkType`<sup>Required</sup> <a name="linkType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType"></a>

```typescript
public readonly linkType: string;
```

- *Type:* string

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:
  - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
  - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#link_type ComputeInterconnect#link_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

URL of the InterconnectLocation object that represents where this connection is to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#location ComputeInterconnect#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `requestedLinkCount`<sup>Required</sup> <a name="requestedLinkCount" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount"></a>

```typescript
public readonly requestedLinkCount: number;
```

- *Type:* number

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#requested_link_count ComputeInterconnect#requested_link_count}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#admin_enabled ComputeInterconnect#admin_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#description ComputeInterconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#labels ComputeInterconnect#labels}

---

##### `macsec`<sup>Optional</sup> <a name="macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec"></a>

```typescript
public readonly macsec: ComputeInterconnectMacsec;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#macsec ComputeInterconnect#macsec}

---

##### `macsecEnabled`<sup>Optional</sup> <a name="macsecEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled"></a>

```typescript
public readonly macsecEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#macsec_enabled ComputeInterconnect#macsec_enabled}

---

##### `nocContactEmail`<sup>Optional</sup> <a name="nocContactEmail" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail"></a>

```typescript
public readonly nocContactEmail: string;
```

- *Type:* string

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#noc_contact_email ComputeInterconnect#noc_contact_email}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}.

---

##### `remoteLocation`<sup>Optional</sup> <a name="remoteLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation"></a>

```typescript
public readonly remoteLocation: string;
```

- *Type:* string

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#remote_location ComputeInterconnect#remote_location}

---

##### `requestedFeatures`<sup>Optional</sup> <a name="requestedFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures"></a>

```typescript
public readonly requestedFeatures: string[];
```

- *Type:* string[]

interconnects.list of features requested for this Interconnect connection. Options: MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Possible values: ["MACSEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#requested_features ComputeInterconnect#requested_features}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInterconnectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#timeouts ComputeInterconnect#timeouts}

---

### ComputeInterconnectExpectedOutages <a name="ComputeInterconnectExpectedOutages" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

const computeInterconnectExpectedOutages: computeInterconnect.ComputeInterconnectExpectedOutages = { ... }
```


### ComputeInterconnectMacsec <a name="ComputeInterconnectMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

const computeInterconnectMacsec: computeInterconnect.ComputeInterconnectMacsec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys">preSharedKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]</code> | pre_shared_keys block. |

---

##### `preSharedKeys`<sup>Required</sup> <a name="preSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys"></a>

```typescript
public readonly preSharedKeys: IResolvable | ComputeInterconnectMacsecPreSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#pre_shared_keys ComputeInterconnect#pre_shared_keys}

---

### ComputeInterconnectMacsecPreSharedKeys <a name="ComputeInterconnectMacsecPreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

const computeInterconnectMacsecPreSharedKeys: computeInterconnect.ComputeInterconnectMacsecPreSharedKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name">name</a></code> | <code>string</code> | A name for this pre-shared key. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime">startTime</a></code> | <code>string</code> | A RFC3339 timestamp on or after which the key is valid. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for this pre-shared key.

The name must be 1-63 characters long, and
 comply with RFC1035. Specifically, the name must be 1-63 characters long and match
 the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
 must be a lowercase letter, and all following characters must be a dash, lowercase
 letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

A RFC3339 timestamp on or after which the key is valid.

startTime can be in the
future. If the keychain has a single key, startTime can be omitted. If the keychain
has multiple keys, startTime is mandatory for each key. The start times of keys must
be in increasing order. The start times of two consecutive keys must be at least 6
hours apart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#start_time ComputeInterconnect#start_time}

---

### ComputeInterconnectTimeouts <a name="ComputeInterconnectTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

const computeInterconnectTimeouts: computeInterconnect.ComputeInterconnectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectCircuitInfosList <a name="ComputeInterconnectCircuitInfosList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectCircuitInfosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get"></a>

```typescript
public get(index: number): ComputeInterconnectCircuitInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectCircuitInfosOutputReference <a name="ComputeInterconnectCircuitInfosOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectCircuitInfosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId">customerDemarcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId">googleCircuitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId">googleDemarcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerDemarcId`<sup>Required</sup> <a name="customerDemarcId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId"></a>

```typescript
public readonly customerDemarcId: string;
```

- *Type:* string

---

##### `googleCircuitId`<sup>Required</sup> <a name="googleCircuitId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId"></a>

```typescript
public readonly googleCircuitId: string;
```

- *Type:* string

---

##### `googleDemarcId`<sup>Required</sup> <a name="googleDemarcId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId"></a>

```typescript
public readonly googleDemarcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectCircuitInfos;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a>

---


### ComputeInterconnectExpectedOutagesList <a name="ComputeInterconnectExpectedOutagesList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectExpectedOutagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get"></a>

```typescript
public get(index: number): ComputeInterconnectExpectedOutagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectExpectedOutagesOutputReference <a name="ComputeInterconnectExpectedOutagesOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits">affectedCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `affectedCircuits`<sup>Required</sup> <a name="affectedCircuits" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits"></a>

```typescript
public readonly affectedCircuits: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectExpectedOutages;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a>

---


### ComputeInterconnectMacsecOutputReference <a name="ComputeInterconnectMacsecOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectMacsecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys">putPreSharedKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreSharedKeys` <a name="putPreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys"></a>

```typescript
public putPreSharedKeys(value: IResolvable | ComputeInterconnectMacsecPreSharedKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys">preSharedKeys</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput">preSharedKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preSharedKeys`<sup>Required</sup> <a name="preSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys"></a>

```typescript
public readonly preSharedKeys: ComputeInterconnectMacsecPreSharedKeysList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a>

---

##### `preSharedKeysInput`<sup>Optional</sup> <a name="preSharedKeysInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput"></a>

```typescript
public readonly preSharedKeysInput: IResolvable | ComputeInterconnectMacsecPreSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectMacsec;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---


### ComputeInterconnectMacsecPreSharedKeysList <a name="ComputeInterconnectMacsecPreSharedKeysList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get"></a>

```typescript
public get(index: number): ComputeInterconnectMacsecPreSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectMacsecPreSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

---


### ComputeInterconnectMacsecPreSharedKeysOutputReference <a name="ComputeInterconnectMacsecPreSharedKeysOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectMacsecPreSharedKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>

---


### ComputeInterconnectTimeoutsOutputReference <a name="ComputeInterconnectTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInterconnect } from '@cdktf/provider-google'

new computeInterconnect.ComputeInterconnectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---



