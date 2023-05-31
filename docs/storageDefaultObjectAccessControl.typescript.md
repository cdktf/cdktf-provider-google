# `google_storage_default_object_access_control`

Refer to the Terraform Registory for docs: [`google_storage_default_object_access_control`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control).

# `storageDefaultObjectAccessControl` Submodule <a name="`storageDefaultObjectAccessControl` Submodule" id="@cdktf/provider-google.storageDefaultObjectAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDefaultObjectAccessControl <a name="StorageDefaultObjectAccessControl" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control google_storage_default_object_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

new storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl(scope: Construct, id: string, config: StorageDefaultObjectAccessControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig">StorageDefaultObjectAccessControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig">StorageDefaultObjectAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageDefaultObjectAccessControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.projectTeam">projectTeam</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList">StorageDefaultObjectAccessControlProjectTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference">StorageDefaultObjectAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityInput">entityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entity">entity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `projectTeam`<sup>Required</sup> <a name="projectTeam" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.projectTeam"></a>

```typescript
public readonly projectTeam: StorageDefaultObjectAccessControlProjectTeamList;
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList">StorageDefaultObjectAccessControlProjectTeamList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeouts"></a>

```typescript
public readonly timeouts: StorageDefaultObjectAccessControlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference">StorageDefaultObjectAccessControlTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityInput"></a>

```typescript
public readonly entityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: StorageDefaultObjectAccessControlTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a> | cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDefaultObjectAccessControlConfig <a name="StorageDefaultObjectAccessControlConfig" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

const storageDefaultObjectAccessControlConfig: storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.entity">entity</a></code> | <code>string</code> | The entity holding the permission, in one of the following forms: user-{{userId}} user-{{email}} (such as "user-liz@example.com") group-{{groupId}} group-{{email}} (such as "group-example@googlegroups.com") domain-{{domain}} (such as "domain-example.com") project-team-{{projectId}} allUsers allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.role">role</a></code> | <code>string</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.object">object</a></code> | <code>string</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#bucket StorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

The entity holding the permission, in one of the following forms: user-{{userId}} user-{{email}} (such as "user-liz@example.com") group-{{groupId}} group-{{email}} (such as "group-example@googlegroups.com") domain-{{domain}} (such as "domain-example.com") project-team-{{projectId}} allUsers allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#entity StorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#role StorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#object StorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageDefaultObjectAccessControlTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#timeouts StorageDefaultObjectAccessControl#timeouts}

---

### StorageDefaultObjectAccessControlProjectTeam <a name="StorageDefaultObjectAccessControlProjectTeam" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

const storageDefaultObjectAccessControlProjectTeam: storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam = { ... }
```


### StorageDefaultObjectAccessControlTimeouts <a name="StorageDefaultObjectAccessControlTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

const storageDefaultObjectAccessControlTimeouts: storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#create StorageDefaultObjectAccessControl#create}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#delete StorageDefaultObjectAccessControl#delete}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#update StorageDefaultObjectAccessControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#create StorageDefaultObjectAccessControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#delete StorageDefaultObjectAccessControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/storage_default_object_access_control#update StorageDefaultObjectAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDefaultObjectAccessControlProjectTeamList <a name="StorageDefaultObjectAccessControlProjectTeamList" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

new storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get"></a>

```typescript
public get(index: number): StorageDefaultObjectAccessControlProjectTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StorageDefaultObjectAccessControlProjectTeamOutputReference <a name="StorageDefaultObjectAccessControlProjectTeamOutputReference" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

new storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber">projectNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.team">team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam">StorageDefaultObjectAccessControlProjectTeam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageDefaultObjectAccessControlProjectTeam;
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam">StorageDefaultObjectAccessControlProjectTeam</a>

---


### StorageDefaultObjectAccessControlTimeoutsOutputReference <a name="StorageDefaultObjectAccessControlTimeoutsOutputReference" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageDefaultObjectAccessControl } from '@cdktf/provider-google'

new storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageDefaultObjectAccessControlTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a> | cdktf.IResolvable

---



