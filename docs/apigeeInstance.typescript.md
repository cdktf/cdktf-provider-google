# `google_apigee_instance`

Refer to the Terraform Registory for docs: [`google_apigee_instance`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance).

# `apigeeInstance` Submodule <a name="`apigeeInstance` Submodule" id="@cdktf/provider-google.apigeeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeInstance <a name="ApigeeInstance" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance google_apigee_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

new apigeeInstance.ApigeeInstance(scope: Construct, id: string, config: ApigeeInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig">ApigeeInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig">ApigeeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDiskEncryptionKeyName">resetDiskEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetPeeringCidrRange">resetPeeringCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetConsumerAcceptList"></a>

```typescript
public resetConsumerAcceptList(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiskEncryptionKeyName` <a name="resetDiskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDiskEncryptionKeyName"></a>

```typescript
public resetDiskEncryptionKeyName(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetIpRange"></a>

```typescript
public resetIpRange(): void
```

##### `resetPeeringCidrRange` <a name="resetPeeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetPeeringCidrRange"></a>

```typescript
public resetPeeringCidrRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

apigeeInstance.ApigeeInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

apigeeInstance.ApigeeInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

apigeeInstance.ApigeeInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference">ApigeeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyNameInput">diskEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRangeInput">ipRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRangeInput">peeringCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptList">consumerAcceptList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyName">diskEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRange">peeringCidrRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference">ApigeeInstanceTimeoutsOutputReference</a>

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptListInput"></a>

```typescript
public readonly consumerAcceptListInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskEncryptionKeyNameInput`<sup>Optional</sup> <a name="diskEncryptionKeyNameInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyNameInput"></a>

```typescript
public readonly diskEncryptionKeyNameInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRangeInput"></a>

```typescript
public readonly ipRangeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `peeringCidrRangeInput`<sup>Optional</sup> <a name="peeringCidrRangeInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRangeInput"></a>

```typescript
public readonly peeringCidrRangeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskEncryptionKeyName`<sup>Required</sup> <a name="diskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyName"></a>

```typescript
public readonly diskEncryptionKeyName: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `peeringCidrRange`<sup>Required</sup> <a name="peeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRange"></a>

```typescript
public readonly peeringCidrRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeInstanceConfig <a name="ApigeeInstanceConfig" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.Initializer"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

const apigeeInstanceConfig: apigeeInstance.ApigeeInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.location">location</a></code> | <code>string</code> | Required. Compute Engine location where the instance resides. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.name">name</a></code> | <code>string</code> | Resource ID of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.description">description</a></code> | <code>string</code> | Description of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.diskEncryptionKeyName">diskEncryptionKeyName</a></code> | <code>string</code> | Customer Managed Encryption Key (CMEK) used for disk and volume encryption. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#id ApigeeInstance#id}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.ipRange">ipRange</a></code> | <code>string</code> | IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.peeringCidrRange">peeringCidrRange</a></code> | <code>string</code> | The size of the CIDR block range that will be reserved by the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Required. Compute Engine location where the instance resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#location ApigeeInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource ID of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#name ApigeeInstance#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#org_id ApigeeInstance#org_id}

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: string[];
```

- *Type:* string[]

Optional.

Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#description ApigeeInstance#description}

---

##### `diskEncryptionKeyName`<sup>Optional</sup> <a name="diskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.diskEncryptionKeyName"></a>

```typescript
public readonly diskEncryptionKeyName: string;
```

- *Type:* string

Customer Managed Encryption Key (CMEK) used for disk and volume encryption.

Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#display_name ApigeeInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#id ApigeeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation.

This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#ip_range ApigeeInstance#ip_range}

---

##### `peeringCidrRange`<sup>Optional</sup> <a name="peeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.peeringCidrRange"></a>

```typescript
public readonly peeringCidrRange: string;
```

- *Type:* string

The size of the CIDR block range that will be reserved by the instance.

For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#timeouts ApigeeInstance#timeouts}

---

### ApigeeInstanceTimeouts <a name="ApigeeInstanceTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.Initializer"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

const apigeeInstanceTimeouts: apigeeInstance.ApigeeInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#create ApigeeInstance#create}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#create ApigeeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeInstanceTimeoutsOutputReference <a name="ApigeeInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeInstance } from '@cdktf/provider-google'

new apigeeInstance.ApigeeInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

---



