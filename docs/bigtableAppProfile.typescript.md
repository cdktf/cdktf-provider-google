# `bigtableAppProfile` Submodule <a name="`bigtableAppProfile` Submodule" id="@cdktf/provider-google.bigtableAppProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAppProfile <a name="BigtableAppProfile" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile google_bigtable_app_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

new bigtableAppProfile.BigtableAppProfile(scope: Construct, id: string, config: BigtableAppProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig">BigtableAppProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig">BigtableAppProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly">putDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting">putSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation">putStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly">resetDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings">resetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds">resetMultiClusterRoutingClusterIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny">resetMultiClusterRoutingUseAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetRowAffinity">resetRowAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting">resetSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation">resetStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataBoostIsolationReadOnly` <a name="putDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly"></a>

```typescript
public putDataBoostIsolationReadOnly(value: BigtableAppProfileDataBoostIsolationReadOnly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `putSingleClusterRouting` <a name="putSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting"></a>

```typescript
public putSingleClusterRouting(value: BigtableAppProfileSingleClusterRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `putStandardIsolation` <a name="putStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation"></a>

```typescript
public putStandardIsolation(value: BigtableAppProfileStandardIsolation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: BigtableAppProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---

##### `resetDataBoostIsolationReadOnly` <a name="resetDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly"></a>

```typescript
public resetDataBoostIsolationReadOnly(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreWarnings` <a name="resetIgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings"></a>

```typescript
public resetIgnoreWarnings(): void
```

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetMultiClusterRoutingClusterIds` <a name="resetMultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds"></a>

```typescript
public resetMultiClusterRoutingClusterIds(): void
```

##### `resetMultiClusterRoutingUseAny` <a name="resetMultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny"></a>

```typescript
public resetMultiClusterRoutingUseAny(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRowAffinity` <a name="resetRowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetRowAffinity"></a>

```typescript
public resetRowAffinity(): void
```

##### `resetSingleClusterRouting` <a name="resetSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting"></a>

```typescript
public resetSingleClusterRouting(): void
```

##### `resetStandardIsolation` <a name="resetStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation"></a>

```typescript
public resetStandardIsolation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

bigtableAppProfile.BigtableAppProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

bigtableAppProfile.BigtableAppProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

bigtableAppProfile.BigtableAppProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

bigtableAppProfile.BigtableAppProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableAppProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableAppProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAppProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly">dataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting">singleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation">standardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput">appProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput">dataBoostIsolationReadOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput">ignoreWarningsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput">multiClusterRoutingClusterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput">multiClusterRoutingUseAnyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinityInput">rowAffinityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput">singleClusterRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput">standardIsolationInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId">appProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings">ignoreWarnings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds">multiClusterRoutingClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny">multiClusterRoutingUseAny</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinity">rowAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataBoostIsolationReadOnly`<sup>Required</sup> <a name="dataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly"></a>

```typescript
public readonly dataBoostIsolationReadOnly: BigtableAppProfileDataBoostIsolationReadOnlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `singleClusterRouting`<sup>Required</sup> <a name="singleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting"></a>

```typescript
public readonly singleClusterRouting: BigtableAppProfileSingleClusterRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a>

---

##### `standardIsolation`<sup>Required</sup> <a name="standardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation"></a>

```typescript
public readonly standardIsolation: BigtableAppProfileStandardIsolationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts"></a>

```typescript
public readonly timeouts: BigtableAppProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a>

---

##### `appProfileIdInput`<sup>Optional</sup> <a name="appProfileIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput"></a>

```typescript
public readonly appProfileIdInput: string;
```

- *Type:* string

---

##### `dataBoostIsolationReadOnlyInput`<sup>Optional</sup> <a name="dataBoostIsolationReadOnlyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput"></a>

```typescript
public readonly dataBoostIsolationReadOnlyInput: BigtableAppProfileDataBoostIsolationReadOnly;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreWarningsInput`<sup>Optional</sup> <a name="ignoreWarningsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput"></a>

```typescript
public readonly ignoreWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `multiClusterRoutingClusterIdsInput`<sup>Optional</sup> <a name="multiClusterRoutingClusterIdsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput"></a>

```typescript
public readonly multiClusterRoutingClusterIdsInput: string[];
```

- *Type:* string[]

---

##### `multiClusterRoutingUseAnyInput`<sup>Optional</sup> <a name="multiClusterRoutingUseAnyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput"></a>

```typescript
public readonly multiClusterRoutingUseAnyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rowAffinityInput`<sup>Optional</sup> <a name="rowAffinityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinityInput"></a>

```typescript
public readonly rowAffinityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `singleClusterRoutingInput`<sup>Optional</sup> <a name="singleClusterRoutingInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput"></a>

```typescript
public readonly singleClusterRoutingInput: BigtableAppProfileSingleClusterRouting;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `standardIsolationInput`<sup>Optional</sup> <a name="standardIsolationInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput"></a>

```typescript
public readonly standardIsolationInput: BigtableAppProfileStandardIsolation;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigtableAppProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---

##### `appProfileId`<sup>Required</sup> <a name="appProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId"></a>

```typescript
public readonly appProfileId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreWarnings`<sup>Required</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings"></a>

```typescript
public readonly ignoreWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `multiClusterRoutingClusterIds`<sup>Required</sup> <a name="multiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds"></a>

```typescript
public readonly multiClusterRoutingClusterIds: string[];
```

- *Type:* string[]

---

##### `multiClusterRoutingUseAny`<sup>Required</sup> <a name="multiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny"></a>

```typescript
public readonly multiClusterRoutingUseAny: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rowAffinity`<sup>Required</sup> <a name="rowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinity"></a>

```typescript
public readonly rowAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAppProfileConfig <a name="BigtableAppProfileConfig" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

const bigtableAppProfileConfig: bigtableAppProfile.BigtableAppProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId">appProfileId</a></code> | <code>string</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly">dataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description">description</a></code> | <code>string</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings">ignoreWarnings</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance">instance</a></code> | <code>string</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds">multiClusterRoutingClusterIds</a></code> | <code>string[]</code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny">multiClusterRoutingUseAny</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.rowAffinity">rowAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Must be used with multi-cluster routing. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting">singleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation">standardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appProfileId`<sup>Required</sup> <a name="appProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId"></a>

```typescript
public readonly appProfileId: string;
```

- *Type:* string

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#app_profile_id BigtableAppProfile#app_profile_id}

---

##### `dataBoostIsolationReadOnly`<sup>Optional</sup> <a name="dataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly"></a>

```typescript
public readonly dataBoostIsolationReadOnly: BigtableAppProfileDataBoostIsolationReadOnly;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#data_boost_isolation_read_only BigtableAppProfile#data_boost_isolation_read_only}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#description BigtableAppProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings"></a>

```typescript
public readonly ignoreWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#ignore_warnings BigtableAppProfile#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#instance BigtableAppProfile#instance}

---

##### `multiClusterRoutingClusterIds`<sup>Optional</sup> <a name="multiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds"></a>

```typescript
public readonly multiClusterRoutingClusterIds: string[];
```

- *Type:* string[]

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#multi_cluster_routing_cluster_ids BigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `multiClusterRoutingUseAny`<sup>Optional</sup> <a name="multiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny"></a>

```typescript
public readonly multiClusterRoutingUseAny: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}.

---

##### `rowAffinity`<sup>Optional</sup> <a name="rowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.rowAffinity"></a>

```typescript
public readonly rowAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Must be used with multi-cluster routing.

If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#row_affinity BigtableAppProfile#row_affinity}

---

##### `singleClusterRouting`<sup>Optional</sup> <a name="singleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting"></a>

```typescript
public readonly singleClusterRouting: BigtableAppProfileSingleClusterRouting;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#single_cluster_routing BigtableAppProfile#single_cluster_routing}

---

##### `standardIsolation`<sup>Optional</sup> <a name="standardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation"></a>

```typescript
public readonly standardIsolation: BigtableAppProfileStandardIsolation;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#standard_isolation BigtableAppProfile#standard_isolation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigtableAppProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#timeouts BigtableAppProfile#timeouts}

---

### BigtableAppProfileDataBoostIsolationReadOnly <a name="BigtableAppProfileDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

const bigtableAppProfileDataBoostIsolationReadOnly: bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner">computeBillingOwner</a></code> | <code>string</code> | The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]. |

---

##### `computeBillingOwner`<sup>Required</sup> <a name="computeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner"></a>

```typescript
public readonly computeBillingOwner: string;
```

- *Type:* string

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#compute_billing_owner BigtableAppProfile#compute_billing_owner}

---

### BigtableAppProfileSingleClusterRouting <a name="BigtableAppProfileSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

const bigtableAppProfileSingleClusterRouting: bigtableAppProfile.BigtableAppProfileSingleClusterRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId">clusterId</a></code> | <code>string</code> | The cluster to which read/write requests should be routed. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites">allowTransactionalWrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#cluster_id BigtableAppProfile#cluster_id}

---

##### `allowTransactionalWrites`<sup>Optional</sup> <a name="allowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites"></a>

```typescript
public readonly allowTransactionalWrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#allow_transactional_writes BigtableAppProfile#allow_transactional_writes}

---

### BigtableAppProfileStandardIsolation <a name="BigtableAppProfileStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

const bigtableAppProfileStandardIsolation: bigtableAppProfile.BigtableAppProfileStandardIsolation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority">priority</a></code> | <code>string</code> | The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#priority BigtableAppProfile#priority}

---

### BigtableAppProfileTimeouts <a name="BigtableAppProfileTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

const bigtableAppProfileTimeouts: bigtableAppProfile.BigtableAppProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAppProfileDataBoostIsolationReadOnlyOutputReference <a name="BigtableAppProfileDataBoostIsolationReadOnlyOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

new bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput">computeBillingOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner">computeBillingOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeBillingOwnerInput`<sup>Optional</sup> <a name="computeBillingOwnerInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput"></a>

```typescript
public readonly computeBillingOwnerInput: string;
```

- *Type:* string

---

##### `computeBillingOwner`<sup>Required</sup> <a name="computeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner"></a>

```typescript
public readonly computeBillingOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableAppProfileDataBoostIsolationReadOnly;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---


### BigtableAppProfileSingleClusterRoutingOutputReference <a name="BigtableAppProfileSingleClusterRoutingOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

new bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites">resetAllowTransactionalWrites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowTransactionalWrites` <a name="resetAllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites"></a>

```typescript
public resetAllowTransactionalWrites(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput">allowTransactionalWritesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites">allowTransactionalWrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowTransactionalWritesInput`<sup>Optional</sup> <a name="allowTransactionalWritesInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput"></a>

```typescript
public readonly allowTransactionalWritesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `allowTransactionalWrites`<sup>Required</sup> <a name="allowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites"></a>

```typescript
public readonly allowTransactionalWrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableAppProfileSingleClusterRouting;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---


### BigtableAppProfileStandardIsolationOutputReference <a name="BigtableAppProfileStandardIsolationOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

new bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableAppProfileStandardIsolation;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---


### BigtableAppProfileTimeoutsOutputReference <a name="BigtableAppProfileTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigtableAppProfile } from '@cdktf/provider-google'

new bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableAppProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---



