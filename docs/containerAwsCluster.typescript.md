# `containerAwsCluster` Submodule <a name="`containerAwsCluster` Submodule" id="@cdktf/provider-google.containerAwsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAwsCluster <a name="ContainerAwsCluster" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster google_container_aws_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsCluster(scope: Construct, id: string, config: ContainerAwsClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig">ContainerAwsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig">ContainerAwsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization"></a>

```typescript
public putAuthorization(value: ContainerAwsClusterAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putBinaryAuthorization"></a>

```typescript
public putBinaryAuthorization(value: ContainerAwsClusterBinaryAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane"></a>

```typescript
public putControlPlane(value: ContainerAwsClusterControlPlane): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet"></a>

```typescript
public putFleet(value: ContainerAwsClusterFleet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking"></a>

```typescript
public putNetworking(value: ContainerAwsClusterNetworking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAwsClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetBinaryAuthorization"></a>

```typescript
public resetBinaryAuthorization(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAwsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

containerAwsCluster.ContainerAwsCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

containerAwsCluster.ContainerAwsCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

containerAwsCluster.ContainerAwsCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

containerAwsCluster.ContainerAwsCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAwsCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAwsCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAwsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAwsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference">ContainerAwsClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig">workloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput">networkingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization"></a>

```typescript
public readonly authorization: ContainerAwsClusterAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a>

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: ContainerAwsClusterBinaryAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference">ContainerAwsClusterBinaryAuthorizationOutputReference</a>

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane"></a>

```typescript
public readonly controlPlane: ContainerAwsClusterControlPlaneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet"></a>

```typescript
public readonly fleet: ContainerAwsClusterFleetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking"></a>

```typescript
public readonly networking: ContainerAwsClusterNetworkingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAwsClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workloadIdentityConfig`<sup>Required</sup> <a name="workloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig"></a>

```typescript
public readonly workloadIdentityConfig: ContainerAwsClusterWorkloadIdentityConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: ContainerAwsClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorizationInput"></a>

```typescript
public readonly binaryAuthorizationInput: ContainerAwsClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput"></a>

```typescript
public readonly controlPlaneInput: ContainerAwsClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput"></a>

```typescript
public readonly fleetInput: ContainerAwsClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput"></a>

```typescript
public readonly networkingInput: ContainerAwsClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAwsClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAwsClusterAuthorization <a name="ContainerAwsClusterAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterAuthorization: containerAwsCluster.ContainerAwsClusterAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]</code> | admin_users block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminGroups">adminGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]</code> | admin_groups block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: IResolvable | ContainerAwsClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#admin_users ContainerAwsCluster#admin_users}

---

##### `adminGroups`<sup>Optional</sup> <a name="adminGroups" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminGroups"></a>

```typescript
public readonly adminGroups: IResolvable | ContainerAwsClusterAuthorizationAdminGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#admin_groups ContainerAwsCluster#admin_groups}

---

### ContainerAwsClusterAuthorizationAdminGroups <a name="ContainerAwsClusterAuthorizationAdminGroups" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterAuthorizationAdminGroups: containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups.property.group">group</a></code> | <code>string</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#group ContainerAwsCluster#group}

---

### ContainerAwsClusterAuthorizationAdminUsers <a name="ContainerAwsClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterAuthorizationAdminUsers: containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>string</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#username ContainerAwsCluster#username}

---

### ContainerAwsClusterBinaryAuthorization <a name="ContainerAwsClusterBinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterBinaryAuthorization: containerAwsCluster.ContainerAwsClusterBinaryAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE. |

---

##### `evaluationMode`<sup>Optional</sup> <a name="evaluationMode" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#evaluation_mode ContainerAwsCluster#evaluation_mode}

---

### ContainerAwsClusterConfig <a name="ContainerAwsClusterConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterConfig: containerAwsCluster.ContainerAwsClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name">name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description">description</a></code> | <code>string</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization"></a>

```typescript
public readonly authorization: ContainerAwsClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#authorization ContainerAwsCluster#authorization}

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#aws_region ContainerAwsCluster#aws_region}

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane"></a>

```typescript
public readonly controlPlane: ContainerAwsClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#control_plane ContainerAwsCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet"></a>

```typescript
public readonly fleet: ContainerAwsClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#fleet ContainerAwsCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#location ContainerAwsCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#name ContainerAwsCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking"></a>

```typescript
public readonly networking: ContainerAwsClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#networking ContainerAwsCluster#networking}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#annotations ContainerAwsCluster#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: ContainerAwsClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#binary_authorization ContainerAwsCluster#binary_authorization}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#description ContainerAwsCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAwsClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#timeouts ContainerAwsCluster#timeouts}

---

### ContainerAwsClusterControlPlane <a name="ContainerAwsClusterControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlane: containerAwsCluster.ContainerAwsClusterControlPlane = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication">awsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | aws_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | The name of the AWS IAM instance pofile to assign to each control plane replica. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The list of subnets where control plane replicas will run. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version">version</a></code> | <code>string</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling . |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType">instanceType</a></code> | <code>string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Optional. |

---

##### `awsServicesAuthentication`<sup>Required</sup> <a name="awsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication"></a>

```typescript
public readonly awsServicesAuthentication: ContainerAwsClusterControlPlaneAwsServicesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#aws_services_authentication ContainerAwsCluster#aws_services_authentication}

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption"></a>

```typescript
public readonly configEncryption: ContainerAwsClusterControlPlaneConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#config_encryption ContainerAwsCluster#config_encryption}

---

##### `databaseEncryption`<sup>Required</sup> <a name="databaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption"></a>

```typescript
public readonly databaseEncryption: ContainerAwsClusterControlPlaneDatabaseEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#database_encryption ContainerAwsCluster#database_encryption}

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#iam_instance_profile ContainerAwsCluster#iam_instance_profile}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#subnet_ids ContainerAwsCluster#subnet_ids}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#version ContainerAwsCluster#version}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#instance_type ContainerAwsCluster#instance_type}

---

##### `mainVolume`<sup>Optional</sup> <a name="mainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume"></a>

```typescript
public readonly mainVolume: ContainerAwsClusterControlPlaneMainVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#main_volume ContainerAwsCluster#main_volume}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: ContainerAwsClusterControlPlaneProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#proxy_config ContainerAwsCluster#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume"></a>

```typescript
public readonly rootVolume: ContainerAwsClusterControlPlaneRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#root_volume ContainerAwsCluster#root_volume}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#security_group_ids ContainerAwsCluster#security_group_ids}

---

##### `sshConfig`<sup>Optional</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig"></a>

```typescript
public readonly sshConfig: ContainerAwsClusterControlPlaneSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#ssh_config ContainerAwsCluster#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#tags ContainerAwsCluster#tags}

---

### ContainerAwsClusterControlPlaneAwsServicesAuthentication <a name="ContainerAwsClusterControlPlaneAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneAwsServicesAuthentication: containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName">roleSessionName</a></code> | <code>string</code> | Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#role_arn ContainerAwsCluster#role_arn}

---

##### `roleSessionName`<sup>Optional</sup> <a name="roleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName"></a>

```typescript
public readonly roleSessionName: string;
```

- *Type:* string

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#role_session_name ContainerAwsCluster#role_session_name}

---

### ContainerAwsClusterControlPlaneConfigEncryption <a name="ContainerAwsClusterControlPlaneConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneConfigEncryption: containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt cluster configuration. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneDatabaseEncryption <a name="ContainerAwsClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneDatabaseEncryption: containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt cluster secrets. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneMainVolume <a name="ContainerAwsClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneMainVolume: containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops">iops</a></code> | <code>number</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.throughput">throughput</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneProxyConfig <a name="ContainerAwsClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneProxyConfig: containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion">secretVersion</a></code> | <code>string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#secret_arn ContainerAwsCluster#secret_arn}

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#secret_version ContainerAwsCluster#secret_version}

---

### ContainerAwsClusterControlPlaneRootVolume <a name="ContainerAwsClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneRootVolume: containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops">iops</a></code> | <code>number</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.throughput">throughput</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneSshConfig <a name="ContainerAwsClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterControlPlaneSshConfig: containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#ec2_key_pair ContainerAwsCluster#ec2_key_pair}

---

### ContainerAwsClusterFleet <a name="ContainerAwsClusterFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterFleet: containerAwsCluster.ContainerAwsClusterFleet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project">project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

### ContainerAwsClusterNetworking <a name="ContainerAwsClusterNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterNetworking: containerAwsCluster.ContainerAwsClusterNetworking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId">vpcId</a></code> | <code>string</code> | The VPC associated with the cluster. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled">perNodePoolSgRulesDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the per node pool subnet security group rules on the control plane security group. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#pod_address_cidr_blocks ContainerAwsCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#service_address_cidr_blocks ContainerAwsCluster#service_address_cidr_blocks}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#vpc_id ContainerAwsCluster#vpc_id}

---

##### `perNodePoolSgRulesDisabled`<sup>Optional</sup> <a name="perNodePoolSgRulesDisabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled"></a>

```typescript
public readonly perNodePoolSgRulesDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#per_node_pool_sg_rules_disabled ContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

### ContainerAwsClusterTimeouts <a name="ContainerAwsClusterTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterTimeouts: containerAwsCluster.ContainerAwsClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}.

---

### ContainerAwsClusterWorkloadIdentityConfig <a name="ContainerAwsClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

const containerAwsClusterWorkloadIdentityConfig: containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAwsClusterAuthorizationAdminGroupsList <a name="ContainerAwsClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.get"></a>

```typescript
public get(index: number): ContainerAwsClusterAuthorizationAdminGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsClusterAuthorizationAdminGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]

---


### ContainerAwsClusterAuthorizationAdminGroupsOutputReference <a name="ContainerAwsClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsClusterAuthorizationAdminGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>

---


### ContainerAwsClusterAuthorizationAdminUsersList <a name="ContainerAwsClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get"></a>

```typescript
public get(index: number): ContainerAwsClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]

---


### ContainerAwsClusterAuthorizationAdminUsersOutputReference <a name="ContainerAwsClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsClusterAuthorizationAdminUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>

---


### ContainerAwsClusterAuthorizationOutputReference <a name="ContainerAwsClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminGroups">putAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resetAdminGroups">resetAdminGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminGroups` <a name="putAdminGroups" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminGroups"></a>

```typescript
public putAdminGroups(value: IResolvable | ContainerAwsClusterAuthorizationAdminGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]

---

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers"></a>

```typescript
public putAdminUsers(value: IResolvable | ContainerAwsClusterAuthorizationAdminUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]

---

##### `resetAdminGroups` <a name="resetAdminGroups" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resetAdminGroups"></a>

```typescript
public resetAdminGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminGroups">adminGroups</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList">ContainerAwsClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminGroupsInput">adminGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminGroups`<sup>Required</sup> <a name="adminGroups" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminGroups"></a>

```typescript
public readonly adminGroups: ContainerAwsClusterAuthorizationAdminGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroupsList">ContainerAwsClusterAuthorizationAdminGroupsList</a>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: ContainerAwsClusterAuthorizationAdminUsersList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a>

---

##### `adminGroupsInput`<sup>Optional</sup> <a name="adminGroupsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```typescript
public readonly adminGroupsInput: IResolvable | ContainerAwsClusterAuthorizationAdminGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminGroups">ContainerAwsClusterAuthorizationAdminGroups</a>[]

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: IResolvable | ContainerAwsClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers">ContainerAwsClusterAuthorizationAdminUsers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---


### ContainerAwsClusterBinaryAuthorizationOutputReference <a name="ContainerAwsClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode">resetEvaluationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationMode` <a name="resetEvaluationMode" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```typescript
public resetEvaluationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

---


### ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference <a name="ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName">resetRoleSessionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleSessionName` <a name="resetRoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName"></a>

```typescript
public resetRoleSessionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput">roleSessionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName">roleSessionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleSessionNameInput`<sup>Optional</sup> <a name="roleSessionNameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput"></a>

```typescript
public readonly roleSessionNameInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleSessionName`<sup>Required</sup> <a name="roleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName"></a>

```typescript
public readonly roleSessionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneAwsServicesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---


### ContainerAwsClusterControlPlaneConfigEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneConfigEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---


### ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneDatabaseEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAwsClusterControlPlaneMainVolumeOutputReference <a name="ContainerAwsClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneMainVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---


### ContainerAwsClusterControlPlaneOutputReference <a name="ContainerAwsClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication">putAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption">putConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption">putDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume">putMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume">resetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig">resetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsServicesAuthentication` <a name="putAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication"></a>

```typescript
public putAwsServicesAuthentication(value: ContainerAwsClusterControlPlaneAwsServicesAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `putConfigEncryption` <a name="putConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption"></a>

```typescript
public putConfigEncryption(value: ContainerAwsClusterControlPlaneConfigEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `putDatabaseEncryption` <a name="putDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```typescript
public putDatabaseEncryption(value: ContainerAwsClusterControlPlaneDatabaseEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `putMainVolume` <a name="putMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume"></a>

```typescript
public putMainVolume(value: ContainerAwsClusterControlPlaneMainVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig"></a>

```typescript
public putProxyConfig(value: ContainerAwsClusterControlPlaneProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume"></a>

```typescript
public putRootVolume(value: ContainerAwsClusterControlPlaneRootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig"></a>

```typescript
public putSshConfig(value: ContainerAwsClusterControlPlaneSshConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetMainVolume` <a name="resetMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume"></a>

```typescript
public resetMainVolume(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume"></a>

```typescript
public resetRootVolume(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSshConfig` <a name="resetSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig"></a>

```typescript
public resetSshConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication">awsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput">awsServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput">configEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput">databaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput">mainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsServicesAuthentication`<sup>Required</sup> <a name="awsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication"></a>

```typescript
public readonly awsServicesAuthentication: ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a>

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption"></a>

```typescript
public readonly configEncryption: ContainerAwsClusterControlPlaneConfigEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a>

---

##### `databaseEncryption`<sup>Required</sup> <a name="databaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```typescript
public readonly databaseEncryption: ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `mainVolume`<sup>Required</sup> <a name="mainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume"></a>

```typescript
public readonly mainVolume: ContainerAwsClusterControlPlaneMainVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: ContainerAwsClusterControlPlaneProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume"></a>

```typescript
public readonly rootVolume: ContainerAwsClusterControlPlaneRootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig"></a>

```typescript
public readonly sshConfig: ContainerAwsClusterControlPlaneSshConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a>

---

##### `awsServicesAuthenticationInput`<sup>Optional</sup> <a name="awsServicesAuthenticationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput"></a>

```typescript
public readonly awsServicesAuthenticationInput: ContainerAwsClusterControlPlaneAwsServicesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `configEncryptionInput`<sup>Optional</sup> <a name="configEncryptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput"></a>

```typescript
public readonly configEncryptionInput: ContainerAwsClusterControlPlaneConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `databaseEncryptionInput`<sup>Optional</sup> <a name="databaseEncryptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```typescript
public readonly databaseEncryptionInput: ContainerAwsClusterControlPlaneDatabaseEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `mainVolumeInput`<sup>Optional</sup> <a name="mainVolumeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```typescript
public readonly mainVolumeInput: ContainerAwsClusterControlPlaneMainVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: ContainerAwsClusterControlPlaneProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: ContainerAwsClusterControlPlaneRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```typescript
public readonly sshConfigInput: ContainerAwsClusterControlPlaneSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---


### ContainerAwsClusterControlPlaneProxyConfigOutputReference <a name="ContainerAwsClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---


### ContainerAwsClusterControlPlaneRootVolumeOutputReference <a name="ContainerAwsClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---


### ContainerAwsClusterControlPlaneSshConfigOutputReference <a name="ContainerAwsClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput">ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2KeyPairInput`<sup>Optional</sup> <a name="ec2KeyPairInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput"></a>

```typescript
public readonly ec2KeyPairInput: string;
```

- *Type:* string

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterControlPlaneSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---


### ContainerAwsClusterFleetOutputReference <a name="ContainerAwsClusterFleetOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---


### ContainerAwsClusterNetworkingOutputReference <a name="ContainerAwsClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterNetworkingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled">resetPerNodePoolSgRulesDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerNodePoolSgRulesDisabled` <a name="resetPerNodePoolSgRulesDisabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled"></a>

```typescript
public resetPerNodePoolSgRulesDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput">perNodePoolSgRulesDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled">perNodePoolSgRulesDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `perNodePoolSgRulesDisabledInput`<sup>Optional</sup> <a name="perNodePoolSgRulesDisabledInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput"></a>

```typescript
public readonly perNodePoolSgRulesDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```typescript
public readonly podAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```typescript
public readonly serviceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `perNodePoolSgRulesDisabled`<sup>Required</sup> <a name="perNodePoolSgRulesDisabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled"></a>

```typescript
public readonly perNodePoolSgRulesDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---


### ContainerAwsClusterTimeoutsOutputReference <a name="ContainerAwsClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

---


### ContainerAwsClusterWorkloadIdentityConfigList <a name="ContainerAwsClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get"></a>

```typescript
public get(index: number): ContainerAwsClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerAwsClusterWorkloadIdentityConfigOutputReference <a name="ContainerAwsClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```typescript
import { containerAwsCluster } from '@cdktf/provider-google'

new containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `workloadPool`<sup>Required</sup> <a name="workloadPool" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```typescript
public readonly workloadPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsClusterWorkloadIdentityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a>

---



